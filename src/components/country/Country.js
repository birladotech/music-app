import React from "react";

export default function Country({ ...registerForm }) {
  return (
    <select
      name="country"
      className="form-select"
      required="required"
      {...registerForm}
    >
      <option value="">Country</option>
      <option value="3">Afghanistan</option>
      <option value="4">Afrique Centrale</option>
      <option value="5">Afrique du Sud</option>
      <option value="6">Albanie</option>
      <option value="7">Algerie</option>
      <option value="8">Allemagne</option>
      <option value="9">Andorre</option>
      <option value="10">Angola</option>
      <option value="11">Anguilla</option>
      <option value="12">Arabie_Saoudite</option>
      <option value="13">Argentine</option>
      <option value="14">Armenie</option>
      <option value="15">Australie</option>
      <option value="16">Autriche</option>
      <option value="17">Azerbaidjan</option>
      <option value="18">Bahamas</option>
      <option value="21">Bahrein</option>
      <option value="19">Bangladesh</option>
      <option value="20">Barbade</option>
      <option value="22">Belgique</option>
      <option value="23">Belize</option>
      <option value="24">Benin</option>
      <option value="25">Bermudes</option>
      <option value="29">Bhoutan</option>
      <option value="26">Bielorussie</option>
      <option value="27">Bolivie</option>
      <option value="28">Botswana</option>
      <option value="30">Boznie Herzegovine</option>
      <option value="31">Bresil</option>
      <option value="32">Brunei</option>
      <option value="33">Bulgarie</option>
      <option value="34">Burkina Faso</option>
      <option value="35">Burundi</option>
      <option value="36">Caiman</option>
      <option value="37">Cambodge</option>
      <option value="38">Cameroun</option>
      <option value="39">Canada</option>
      <option value="40">Canaries</option>
      <option value="41">Cap Vert</option>
      <option value="42">Chile</option>
      <option value="43">Chine</option>
      <option value="44">Chypre</option>
      <option value="45">Colombie</option>
      <option value="46">Congo</option>
      <option value="47">Congo Democratique</option>
      <option value="48">Cook</option>
      <option value="49">Coree du Nord</option>
      <option value="50">Coree du Sud</option>
      <option value="51">Costa Rica</option>
      <option value="53">Croatie</option>
      <option value="54">Cuba</option>
      <option value="52">Côte d'Ivoire</option>
      <option value="55">Danemark</option>
      <option value="56">Djibouti</option>
      <option value="57">Dominique</option>
      <option value="58">Egypte</option>
      <option value="59">Emirats Arabes Unis</option>
      <option value="60">Equateur</option>
      <option value="61">Erythree</option>
      <option value="62">Espagne</option>
      <option value="63">Estonie</option>
      <option value="64">Ethiopie</option>
      <option value="65">Falkland</option>
      <option value="66">Feroe</option>
      <option value="67">Fidji</option>
      <option value="68">Finlande</option>
      <option value="69">France</option>
      <option value="70">Gabon</option>
      <option value="71">Gambie</option>
      <option value="72">Georgie</option>
      <option value="73">Ghana</option>
      <option value="74">Gibraltar</option>
      <option value="75">Grece</option>
      <option value="76">Grenade</option>
      <option value="77">Groenland</option>
      <option value="78">Guadeloupe</option>
      <option value="79">Guam</option>
      <option value="80">Guatemala</option>
      <option value="81">Guernesey</option>
      <option value="82">Guinee</option>
      <option value="83">Guinee Bissau</option>
      <option value="84">Guinee Equatoriale</option>
      <option value="85">Guyana</option>
      <option value="86">Guyane Francaise</option>
      <option value="1" selected>
        HAITI
      </option>
      <option value="87">Hawaii</option>
      <option value="88">Honduras</option>
      <option value="89">Hong_Kong</option>
      <option value="90">Hongrie</option>
      <option value="91">Inde</option>
      <option value="92">Indonesie</option>
      <option value="93">Iran</option>
      <option value="94">Iraq</option>
      <option value="95">Irlande</option>
      <option value="96">Islande</option>
      <option value="97">Israel</option>
      <option value="98">Italie</option>
      <option value="99">Jamaique</option>
      <option value="100">Jan Mayen</option>
      <option value="101">Japon</option>
      <option value="102">Jersey</option>
      <option value="103">Jordanie</option>
      <option value="104">Kazakhstan</option>
      <option value="105">Kenya</option>
      <option value="106">Kirghizistan</option>
      <option value="107">Kiribati</option>
      <option value="108">Koweit</option>
      <option value="109">Laos</option>
      <option value="110">Lesotho</option>
      <option value="111">Lettonie</option>
      <option value="112">Liban</option>
      <option value="113">Liberia</option>
      <option value="114">Liechtenstein</option>
      <option value="115">Lituanie</option>
      <option value="116">Luxembourg</option>
      <option value="117">Lybie</option>
      <option value="118">Macao</option>
      <option value="119">Macedoine</option>
      <option value="120">Madagascar</option>
      <option value="121">Madère</option>
      <option value="122">Malaisie</option>
      <option value="123">Malawi</option>
      <option value="124">Maldives</option>
      <option value="125">Mali</option>
      <option value="126">Malte</option>
      <option value="127">Man</option>
      <option value="128">Mariannes du Nord</option>
      <option value="129">Maroc</option>
      <option value="130">Marshall</option>
      <option value="131">Martinique</option>
      <option value="132">Maurice</option>
      <option value="133">Mauritanie</option>
      <option value="134">Mayotte</option>
      <option value="135">Mexique</option>
      <option value="136">Micronesie</option>
      <option value="137">Midway</option>
      <option value="138">Moldavie</option>
      <option value="139">Monaco</option>
      <option value="140">Mongolie</option>
      <option value="141">Montserrat</option>
      <option value="142">Mozambique</option>
      <option value="143">Namibie</option>
      <option value="144">Nauru</option>
      <option value="145">Nepal</option>
      <option value="146">Nicaragua</option>
      <option value="147">Niger</option>
      <option value="148">Nigeria</option>
      <option value="149">Niue</option>
      <option value="150">Norfolk</option>
      <option value="151">Norvege</option>
      <option value="152">Nouvelle Caledonie</option>
      <option value="153">Nouvelle Zelande</option>
      <option value="154">Oman</option>
      <option value="155">Ouganda</option>
      <option value="156">Ouzbekistan</option>
      <option value="157">Pakistan</option>
      <option value="158">Palau</option>
      <option value="159">Palestine</option>
      <option value="160">Panama</option>
      <option value="161">Papouasie Nouvelle Guinee</option>
      <option value="162">Paraguay</option>
      <option value="163">Pays Bas</option>
      <option value="164">Perou</option>
      <option value="165">Philippines</option>
      <option value="166">Pologne</option>
      <option value="167">Polynesie</option>
      <option value="168">Porto Rico</option>
      <option value="169">Portugal</option>
      <option value="170">Qatar</option>
      <option value="171">Republique Dominicaine</option>
      <option value="172">Republique Tcheque</option>
      <option value="173">Reunion</option>
      <option value="174">Roumanie</option>
      <option value="175">Royaume Uni</option>
      <option value="176">Russie</option>
      <option value="177">Rwanda</option>
      <option value="178">Sahara Occidental</option>
      <option value="180">Saint Marin</option>
      <option value="179">Sainte Lucie</option>
      <option value="181">Salomon</option>
      <option value="182">Salvador</option>
      <option value="184">Samoa Americaine</option>
      <option value="183">Samoa Occidentales</option>
      <option value="185">Sao Tome et Principe</option>
      <option value="186">Senegal</option>
      <option value="187">Seychelles</option>
      <option value="188">Sierra Leone</option>
      <option value="189">Singapour</option>
      <option value="190">Slovaquie</option>
      <option value="191">Slovenie</option>
      <option value="192">Somalie</option>
      <option value="193">Soudan</option>
      <option value="194">Sri Lanka</option>
      <option value="195">Suede</option>
      <option value="196">Suisse</option>
      <option value="197">Surinam</option>
      <option value="198">Swaziland</option>
      <option value="199">Syrie</option>
      <option value="200">Tadjikistan</option>
      <option value="201">Taiwan</option>
      <option value="203">Tanzanie</option>
      <option value="204">Tchad</option>
      <option value="205">Thailande</option>
      <option value="206">Tibet</option>
      <option value="207">Timor Oriental</option>
      <option value="208">Togo</option>
      <option value="202">Tonga</option>
      <option value="209">Trinite et Tobago</option>
      <option value="210">Tristan de cuncha</option>
      <option value="211">Tunisie</option>
      <option value="212">Turmenistan</option>
      <option value="213">Turquie</option>
      <option value="2">USA</option>
      <option value="214">Ukraine</option>
      <option value="215">Uruguay</option>
      <option value="216">Vanuatu</option>
      <option value="217">Vatican</option>
      <option value="218">Venezuela</option>
      <option value="219">Vierges Americaines</option>
      <option value="220">Vierges Britanniques</option>
      <option value="221">Vietnam</option>
      <option value="222">Wake</option>
      <option value="223">Wallis et Futuma</option>
      <option value="224">Yemen</option>
      <option value="225">Yougoslavie</option>
      <option value="226">Zambie</option>
      <option value="227">Zimbabwe</option>
    </select>
  );
}
