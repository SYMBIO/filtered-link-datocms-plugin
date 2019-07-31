<h1 class="code-line" data-line-start="0" data-line-end="1"><a id="DatoCMS_Filtered_Links_Plugin_0"></a>DatoCMS Filtered Links Plugin</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">Tento plugin přidává možnost filtrování hodnot z propojených modelů v polích typu Single Link v DatoCMS.</p>
<ul>
<li class="has-line-data" data-line-start="4" data-line-end="5">Možnost filtrovat výsledné hodnoty podle jakéhokoliv pole z propojeného modelu</li>
<li class="has-line-data" data-line-start="5" data-line-end="6">8 různých univerzálních filtrů</li>
<li class="has-line-data" data-line-start="6" data-line-end="8">Možnost výběru návratového pole</li>
</ul>
<h2 class="code-line" data-line-start="8" data-line-end="9"><a id="Instalace_8"></a>Instalace</h2>
<p class="has-line-data" data-line-start="10" data-line-end="11">Plugin je momentálně private, tudíž je instalace trochu složitější. Pokud v projektu není plugin přidán, je potřeba:</p>
<ul>
<li class="has-line-data" data-line-start="11" data-line-end="12">V nastavení DatoCMS --&gt; Pluginy vytvořte nový privátní plugin</li>
<li class="has-line-data" data-line-start="12" data-line-end="13">V konfiguraci nastavte následující:</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">NÁZEV PLUGINU: Link Filter</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">POPISEK: Adds filters to Single Link field types</li>
<li class="has-line-data" data-line-start="15" data-line-end="16">ENTRY POINT URL: Url adresa, na které je plugin hostován</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">TYP POLE: Single Link</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">TYP PLUGINU: Field editor</li>
<li class="has-line-data" data-line-start="18" data-line-end="19">DEFINICE PARAMETRŮ:</li>
</ul>
<pre><code class="has-line-data" data-line-start="20" data-line-end="40">{
  "global": [],
  "instance": [
    {
      "id": "queryString",
      "label": "Filtrovací string",
      "type": "string",
      "required": true,
      "hint": "Zadejte celý filtrovací string. Pro více informací navštivte dokumentaci."
    },
    {
      "id": "resultField",
      "label": "Výsledkové pole",
      "type": "string",
      "required": true,
      "hint": "Toto pole se použije pro načtení výsledků do selectu. Musí korespondovat s modelem, který používáte pro filtrování výše."
    }
  ]
}
</code></pre>
<p class="has-line-data" data-line-start="41" data-line-end="43">V .env je následně nutné nastavit DatoCMS Read-Only API Token.<br>
<code>DATOCMS_TOKEN="..."</code></p>
<h2 class="code-line" data-line-start="44" data-line-end="45"><a id="Pouit_44"></a>Použití</h2>
<p class="has-line-data" data-line-start="46" data-line-end="47">Pro použití pluginu jej nejprve musíte nastavit jako editor na poli, v kterém jej chcete použít. Toto pole musí být typu Single Link.</p>
<ul>
<li class="has-line-data" data-line-start="48" data-line-end="49">Nastavení --&gt; Modely --&gt; [Požadovaný Model] --&gt; [Požadované Pole] Nastavení --&gt; Karta Prezentace</li>
<li class="has-line-data" data-line-start="49" data-line-end="50">Jako Editor Pole zvolte “Link Filter”</li>
<li class="has-line-data" data-line-start="50" data-line-end="51">Zobrazí se 2 dodatečná pole</li>
<li class="has-line-data" data-line-start="51" data-line-end="52">Filtrovací Pole: Sem zadejte celý filtrovací string bez mezer. Pro možnosti využití přejděte do části “Filtrování”</li>
<li class="has-line-data" data-line-start="52" data-line-end="53">Výsledkové Pole: Pole z vyfiltrovaného záznamu, které se zobrazí v selectu. Nejčastěji to bývá název. Pro možnosti využití přejděte do části Filtrování.</li>
<li class="has-line-data" data-line-start="53" data-line-end="54">Uložte. Při vyplňování teď bude vybrané pole zobrazovat pouze filtrované hodnoty.</li>
</ul>
<h2 class="code-line" data-line-start="56" data-line-end="57"><a id="Filtrovn_56"></a>Filtrování</h2>
<p class="has-line-data" data-line-start="58" data-line-end="59">Filtered Links Plugin využívá pro filtrování filtrovacího stringu, ten má následující podobu. Ve filtrovacím stringu nesmí být mezery.</p>
<pre><code class="has-line-data" data-line-start="60" data-line-end="62">ModelApiKey.FieldApiKey{FilterOperator}DesiredValue
</code></pre>
<p class="has-line-data" data-line-start="62" data-line-end="63">kde:</p>
<ul>
<li class="has-line-data" data-line-start="63" data-line-end="64">ModelApiKey reprezentuje ID modelu, zobrazit lze v nastavení modelu hned pod názvem modelu</li>
<li class="has-line-data" data-line-start="64" data-line-end="65">FieldApiKey reprezentuje ID pole, zobrazit lze v nastavení pole hned pod názvem pole</li>
<li class="has-line-data" data-line-start="65" data-line-end="66">FilterOperator reprezentuje filtrovací operátor, který se použije. Přehled filtrovacích operátorů je níže.</li>
<li class="has-line-data" data-line-start="66" data-line-end="68">DesiredValue reprezentuje požadovanou hodnotu pole</li>
</ul>
<p class="has-line-data" data-line-start="68" data-line-end="69">Například filtr:</p>
<pre><code class="has-line-data" data-line-start="70" data-line-end="72">ensemble.statute{=}Cizí
</code></pre>
<p class="has-line-data" data-line-start="72" data-line-end="73">vybere všechny hodnoty z modelu Soubor, kde je hodnota pole Statut rovna “Cizí”. Pro číselné ani stringové hodnoty se nepoužívají uvozovky.</p>
<h4 class="code-line" data-line-start="74" data-line-end="75"><a id="Filtrovac_opertory_74"></a>Filtrovací operátory</h4>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Operátor</th>
<th>Popis</th>
<th>Datové typy</th>
<th>Příklad</th>
</tr>
</thead>
<tbody>
<tr>
<td>{=}</td>
<td>Hodnota pole je rovna požadované hodnotě.</td>
<td>1x string, 1x number</td>
<td><code>ensemble.statute{=}Cizí</code></td>
</tr>
<tr>
<td>{lt}</td>
<td>Hodnota pole je menší, než požadovaná hodnota.</td>
<td>1x number</td>
<td><code>eshopproduct.eshop_product_id{lt}10000</code></td>
</tr>
<tr>
<td>{lte}</td>
<td>Hodnota pole je menší nebo rovna požadované hodnotě.</td>
<td>1x number</td>
<td><code>eshopproduct.eshop_product_id{lte}10000</code></td>
</tr>
<tr>
<td>{gt}</td>
<td>Hodnota pole je větší, než požadovaná hodnota.</td>
<td>1x number</td>
<td><code>eshopproduct.eshop_product_id{gt}10000</code></td>
</tr>
<tr>
<td>{gte}</td>
<td>Hodnota pole je větší nebo rovna požadované hodnotě</td>
<td>1x number</td>
<td><code>eshopproduct.eshop_product_id{gte}10000</code></td>
</tr>
<tr>
<td>{range}</td>
<td>Hodnota pole je ve specifikovaném rozsahu. Hodnoty v rozsahu se oddělují pomlčkou.</td>
<td>2x number</td>
<td><code>eshopproduct.eshop_product_id{range}0-10000</code></td>
</tr>
<tr>
<td>{in}</td>
<td>Hodnota pole spadá do požadovaného pole hodnot. Jednotlivé hodnoty se oddělují čárkou.</td>
<td>∞ string, ∞ number</td>
<td><code>ensemble.statute{in}Cizí,Vlastní</code></td>
</tr>
<tr>
<td>{contains}</td>
<td>Hodnota pole obsahuje požadovaný substring.</td>
<td>1x string</td>
<td><code>ensemble.statute{contains}Zahr</code></td>
</tr>
</tbody>
</table>
<p class="has-line-data" data-line-start="87" data-line-end="89">Pokud je filtrované pole vícejazyčné, je nutné u něj specifikovat jakyzokovu variantu, ze které se má filtrovat. To se provádí zápisem jazykové mutace v hranatých závorkách a uvozovkách. Tedy například:<br>
<code>ensemble.web["cs"]{=}https://www.narodni-divadlo.cz/</code></p>
<h4 class="code-line" data-line-start="90" data-line-end="91"><a id="Vsledkov_pole_90"></a>Výsledkové pole</h4>
<p class="has-line-data" data-line-start="91" data-line-end="92">Výsledkové pole se použije jako zdroj viditelných hodnot, kterými se naplní select. Většinou se jako výsledkové pole používá název nebo titulek, ale lze použít cokoliv. Výsledkové pole se zapisuje ve tvaru:</p>
<pre><code class="has-line-data" data-line-start="93" data-line-end="95">FieldApiKey["locale"]
</code></pre>
<p class="has-line-data" data-line-start="95" data-line-end="96">ModelApiKey se již znovu nezapisuje, protože je již specifikován ve filtrovacím stringu. Pokud je pole jednojazyčné, stačí napsat ApiKey pole. Jestliže je pole vícejazyčné, je nutné v hranatých závorkách a uvozovkách specifikovat jazykovou mutaci.</p>
<h2 class="code-line" data-line-start="97" data-line-end="98"><a id="Znm_problmy_97"></a>Známé problémy</h2>
<p class="has-line-data" data-line-start="98" data-line-end="99">V některých případech trvá načtení pluginu déle.</p>

</body></html>
