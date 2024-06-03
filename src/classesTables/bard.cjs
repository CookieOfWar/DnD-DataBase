const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header">
<td rowspan="2"><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td rowspan="2"><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td rowspan="2">Умения</td>
<td rowspan="2"><span class="long" style="">Известные<br/>заговоры</span><span class="short tooltip tooltipstered">из</span></td>
<td rowspan="2"><span class="long">Известные<br/>заклинания</span><span class="short tooltip tooltipstered">из</span></td>
<td colspan="9"><span class="long">Ячейки заклинаний на уровень заклинаний</span><span class="short tooltip tooltipstered">ячейки</span></td>
</tr>
<tr class="table_header spell-slots-row"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr><td>1</td><td>+2</td>
<td><span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Дополнительные заклинания</span>, <a href="#feature.bardic-inspiration" style="">Вдохновение барда (к6)</a></td>
<td style="">2</td><td style="">4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td>
<td><span class="tableAbility">Мастер на все руки</span>, <span class="tableAbility">Песнь отдыха (к6)</span>, <span class="tableAbility">Магическое вдохновение</span></td>
<td>2</td><td>5</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td>
<td><span class="tableAbility">Коллегия бардов</span>, <a href="#feature.expertise" style="">Компетентность</a></td>
<td style="">2</td><td style="">6</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Многогранность барда</span></td>
<td>3</td><td>7</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td>
<td><span class="tableAbility">Вдохновение барда (к8)</span>, <a href="#feature.font-of-inspiration" style="">Источник вдохновения</a></td>
<td style="">3</td><td style="">8</td><td>4</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>6</td><td>+3</td>
<td><span class="tableAbility">Контрочарование</span>, <span class="tableAbility">Умение коллегии бардов</span></td>
<td>3</td><td>9</td><td>4</td><td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>7</td><td>+3</td>
<td>-</td>
<td>3</td><td>10</td><td>4</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>8</td><td>+3</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>3</td><td>11</td><td>4</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>9</td><td>+4</td>
<td><a href="#feature.song-of-rest" style="">Песнь отдыха (к8)</a></td>
<td style="">3</td><td style="">12</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>10</td><td>+4</td>
<td><span class="tableAbility">Вдохновение барда (к10)</span>, <a href="#feature.expertise" style="">Компетентность</a>, <a href="#feature.magical-secrets" style="">Тайны магии</a></td>
<td style="">4</td><td style="">14</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr style=""><td style="">11</td><td style="">+4</td>
<td style="">-</td>
<td style="">4</td><td style="">15</td><td style="">4</td><td style="">3</td><td style="">3</td><td style="">3</td><td style="">2</td><td style="">1</td><td style="">-</td><td style="">-</td><td style="">-</td></tr>
<tr><td>12</td><td>+4</td>
<td><a href="#feature.ASI" style="">Увеличение характеристик</a></td>
<td style="">4</td><td style="">15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>13</td><td>+5</td>
<td><a href="#feature.song-of-rest" style="">Песнь отдыха (к10)</a></td>
<td style="">4</td><td style="">16</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>14</td><td>+5</td>
<td><span class="tableAbility">Тайны магии</span>, <span class="tableAbility">Умение коллегии бардов</span></td>
<td>4</td><td>18</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>15</td><td>+5</td>
<td><span class="tableAbility">Вдохновение барда (к12)</span></td>
<td>4</td><td>19</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>19</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>17</td><td>+6</td>
<td><span class="tableAbility">Песнь отдыха (к12)</span></td>
<td>4</td><td>20</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>18</td><td>+6</td>
<td><span class="tableAbility">Тайны магии</span></td>
<td>4</td><td>22</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>22</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Превосходное вдохновение</span></td>
<td>4</td><td>22</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle" style="">ХИТЫ</h4>
<p style=""><strong>Кость Хитов:</strong> <span class="dice"><span>1к8</span></span> за каждый уровень барда</p>
<p style=""><strong>Хиты на 1 уровне:</strong> 8 + модификатор Телосложения</p>
<p style=""><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к8</span></span> (или 5) + модификатор Телосложения (суммарно минимум 1) за каждый уровень барда после первого</p>
<br/>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
<p><strong>Доспехи:</strong> <span class="additionalAbility">Лёгкие доспехи</span></p>
<p><strong>Оружие: </strong><span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">длинные мечи</span>, <span class="additionalAbility">короткие мечи</span>, <span class="additionalAbility">рапиры</span>, <span class="additionalAbility">ручные арбалеты</span></p>
<p><strong>Инструменты:</strong> Три <a href="/articles/inventory/100-tools/#Музыкальные">музыкальных инструмента</a> на ваш выбор</p>
<p><strong>Спасброски:</strong> Ловкость, Харизма</p>
<p><strong>Навыки:</strong> Выберите три любых</p>
<br/>
<h4 class="smallSectionTitle" style="">СНАРЯЖЕНИЕ</h4>
<p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">рапира</span>, б) <span class="additionalAbility">длинный меч</span> или в) любое <span class="additionalAbility">простое оружие</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.diplomat">набор дипломата</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.entertainer">набор артиста</span></li>
<li>а) <span class="additionalAbility">лютня</span> или б) любой другой <span class="tooltipstered tooltip" tooltip-for="tools.music">музыкальный инструмент</span></li>
<li><span class="additionalAbility">Кожаный доспех</span> и <span class="additionalAbility">кинжал</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>5к4×10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "дополнительные заклинания барда": `
<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания барда</span></h3>
<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение барда</em></p>
<p>Заклинания в <a href="/spells/?search=&amp;class=33">следующем списке</a> расширяют список заклинаний барда из <em>«Книги игрока»</em>. Список отсортирован по уровню заклинаний, а не по уровню персонажа. Если заклинание может быть исполнено как ритуал, то в скобках также будет указано «ритуал».</p>
<h4 class="tableTitle">Бард</h4>
<div class="table-wrapper"><table class=".td_1__centered"><tbody>
<tr class="table_header"><td style="text-align: center;">Уровень<br>заклинания</td><td>Заклинания</td></tr>
<tr><td>1</td><td><a href="/spells/276-command/">приказ [command]</a>, <a href="/spells/306-color_spray/">сверкающие брызги [color spray]</a></td></tr>
<tr><td>2</td><td><a href="/spells/218-mirror_image/">отражения [mirror image]</a>, <a href="/spells/236-aid/">подмога [aid]</a>, <a href="/spells/355-enlarge_reduce/">увеличение/уменьшение [enlarge/reduce]</a></td></tr>
<tr><td>3</td><td><a href="/spells/83-slow/">замедление [slow]</a>, <a href="/spells/3049-intellect_fortress/">крепость интеллекта [intellect fortress]</a>, <a href="/spells/170-mass_healing_word/">множественное лечащее слово [mass healing word]</a></td></tr>
<tr><td>4</td><td><a href="/spells/32-phantasmal_killer/">воображаемый убийца [phantasmal killer]</a></td></tr>
<tr><td>5</td><td><a href="/spells/160-rary_s_telepathic_bond/">ментальная связь Рэри [Rary’s telepathic bond]</a> (ритуал)</td></tr>
<tr><td>6</td><td><a href="/spells/230-heroes_feast/">пир героев [heroes’ feast]</a></td></tr>
<tr><td>7</td><td><a href="/spells/291-prismatic_spray/">радужные брызги [prismatic spray]</a>, <a href="/spells/3054-dream_of_the_blue_veil/">сон синей вуали [dream of the blue veil]</a></td></tr>
<tr><td>8</td><td><a href="/spells/2-antipathy_sympathy/">антипатия/симпатия [antipathy/sympathy]</a></td></tr>
<tr><td>9</td><td><a href="/spells/290-prismatic_wall/">радужная стена [prismatic wall]</a></td></tr>
</tbody></table></div></div>

<br>
`,
    "вдохновение барда": `
<h3 class="underlined"><span id="feature.bardic-inspiration">ВДОХНОВЕНИЕ БАРДА</span></h3>
<p><em>1-й уровень, умение барда</em></p>
<p>Своими словами или музыкой вы можете вдохновлять других. Для этого вы должны бонусным действием выбрать одно существо, отличное от вас, в пределах 60 футов, которое может вас слышать. Это существо получает кость бардовского вдохновения — к6.</p>
<p>В течение следующих 10 минут это существо может один раз бросить эту кость и добавить результат к проверке характеристики, броску атаки или спасброску, который оно совершает. Существо может принять решение о броске кости вдохновения уже после броска к20, но должно сделать это прежде, чем Мастер объявит результат броска. Как только кость бардовского вдохновения брошена, она исчезает. Существо может иметь только одну такую кость одновременно.</p>
<p>Вы можете использовать это умение количество раз, равное модификатору вашей Харизмы, но как минимум один раз. Потраченные использования этого умения восстанавливаются после продолжительного отдыха.</p>
<p>Ваша кость бардовского вдохновения изменяется с ростом вашего уровня в этом классе. Она становится к8 на 5-м уровне, к10 на 10-м уровне и к12 на 15-м уровне.</p>

<br>
`,
    "мастер на все руки": `
<h3 class="underlined"><span id="feature.jack-of-all-trades">МАСТЕР НА ВСЕ РУКИ</span></h3>
<p><em>2-й уровень, умение барда</em></p>
<p>Вы можете добавлять половину бонуса мастерства, округлённую в меньшую сторону, ко всем проверкам характеристики, куда этот бонус еще не включён.</p>

<br>
`,
    "песнь отдыха": `
<h3 class="underlined"><span id="feature.song-of-rest">ПЕСНЬ ОТДЫХА</span></h3>
<p><em>2-й уровень, умение барда</em></p>
<p>Вы с помощью успокаивающей музыки или речей можете помочь своим раненым союзникам восстановить их силы во время короткого отдыха. Если вы или любые союзные существа, способные слышать ваше исполнение, восстанавливаете хиты в конце короткого отдыха, используя Кости Хитов, каждое потратившее Кость Хитов существо восстанавливает дополнительно <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к6</span></span> хитов.</p>
<p>Количество дополнительно восстанавливаемых хитов растёт с вашим уровнем в этом классе: <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span></span> на 9-м уровне, <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к10</span></span> на 13 уровне и <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к12</span></span> на 17 уровне.</p>

<div class="TCE-feature-on">
<br>
`,
    "магическое вдохновение": `
<h3 class="underlined"><span id="feature.magical-inspiration">Магическое вдохновение</span></h3>
<p><em>2-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение барда</em></p>
<p>Если существо, имея вашу кость бардовского вдохновения, накладывает заклинание, восстанавливающее хиты или наносящее урон, то это существо может бросить эту кость и выбрать цель, затронутую заклинанием. Добавьте выпавшее на кости значение в качестве бонуса к восстановлению хитов или урону. После этого кость бардовского вдохновения тратится.</p></div>

<br>
`,
    "коллегия бардов": `
<h3 class="underlined"><span id="feature.bard-college">КОЛЛЕГИЯ БАРДОВ</span></h3>
<p><em>3-й уровень, умение барда</em></p>
<p>Вы углубляетесь в традиции выбранной вами коллегии бардов. Все коллегии описаны <a href="#bard-colleges">ниже</a>. Этот выбор предоставляет вам умения на 3-м, 6-м и 14-м уровнях.</p>

<br>
`,
    компетентность: `
<h3 class="underlined"><span id="feature.expertise">КОМПЕТЕНТНОСТЬ</span></h3>
<p><em>3-й уровень, умение барда</em></p>
<p>Выберите 2 навыка из тех, которыми вы владеете. Ваш бонус мастерства для этих навыков удваивается.</p>
<p>На 10-м уровне вы можете выбрать еще 2 навыка и получить для них это преимущество.</p>

<br>
`,
    "увеличение характеристик": `
<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
<p><em>4-й уровень, умение барда</em></p>
<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>

<div class="TCE-feature-on">
<br>
`,
    "многогранность барда": `
<h3 class="underlined"><span id="feature.bardic-versatility">Многогранность барда</span></h3>
<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение барда</em></p>
<p>Всякий раз, когда достигаете в этом классе уровня, который предоставляет вам «<span class="tableAbility">Увеличение характеристик</span>», вы можете сделать одно из следующих действий, представляющих собой изменение вашей специализации на навыках и магии:</p>
<ul>
<li>Замените один из навыков, выбранный вами с помощью умения «<span class="tableAbility">Компетентность</span>», одним из ваших других навыков, который не имеет бонуса от этого умения.</li>
<li>Замените один заговор, который вы получили от умения «<span class="tableAbility">Использование заклинаний</span>» этого класса, другим заговором из списка заклинаний барда. </li>
</ul>
</div>

<br>
`,
    "источник вдохновения": `
<h3 class="underlined"><span id="feature.font-of-inspiration">ИСТОЧНИК ВДОХНОВЕНИЯ</span></h3>
<p><em>5-й уровень, умение барда</em></p>
<p>Вы восстанавливаете истраченные вдохновения барда и после короткого и после продолжительного отдыха.</p>

<br>
`,
    контрочарование: `
<h3 class="underlined"><span id="feature.countercharm">КОНТРОЧАРОВАНИЕ</span></h3>
<p><em>6-й уровень, умение барда</em></p>
<p>Вы получаете возможность использовать звуки или слова силы для разрушения воздействующих на разум эффектов. Вы можете действием начать исполнение, которое продлится до конца вашего следующего хода. В течение этого времени вы и все дружественные существа в пределах 30 футов от вас совершают спасброски от <span tooltip-for="condition.frightened" class="tooltipstered tooltip">запугивания</span> и <span tooltip-for="condition.charmed" class="tooltipstered tooltip">очарования</span> с преимуществом. Чтобы получить это преимущество, существа должны слышать вас. Исполнение заканчивается преждевременно, если вы оказываетесь <span tooltip-for="condition.incapacitated" class="tooltipstered tooltip">недееспособны</span>, теряете способность говорить, или прекращаете исполнение добровольно (на это не требуется действие).</p>

<br>
`,
    "тайны магии": `
<h3 class="underlined"><span id="feature.magical-secrets">ТАЙНЫ МАГИИ</span></h3>
<p><em>10-й уровень, умение барда</em></p>
<p>Вы успели набрать знаний из самого широкого спектра магических дисциплин. Выберите два заклинания любых классов, включая ваш собственный. Выбранное заклинание должны быть того уровня, который вы можете использовать согласно таблице Бард, или являться заговором.</p>
<p>Теперь эти заклинания считаются для вас заклинаниями барда и учитываются в общем количестве известных вам заклинаний согласно таблице «<a href="#bard">Бард</a>». Ещё по два заклинания других классов вы выучите на 14-м и 18-м уровнях.</p>

<br>
`,
    "превосходное вдохновение": `
<h3 class="underlined"><span id="feature.superior-inspiration">ПРЕВОСХОДНОЕ ВДОХНОВЕНИЕ</span></h3>
<p><em>20-й уровень, умение барда</em></p>
<p>Если на момент броска инициативы у вас не осталось неиспользованных вдохновений, вы получаете одно.</p>
`,
  },
};
module.exports = details;
