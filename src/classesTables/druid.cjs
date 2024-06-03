const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header">
<td rowspan="2"><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td rowspan="2"><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td rowspan="2">Умения</td>
<td rowspan="2"><span class="long">Известные<br/>заговоры</span><span class="short tooltip tooltipstered">из</span></td>
<td colspan="9"><span class="long">Ячейки заклинаний на уровень заклинаний</span><span class="short tooltip tooltipstered">ячейки</span></td>
</tr>
<tr class="table_header spell-slots-row"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr><td>1</td><td>+2</td>
<td><span class="tableAbility">Друидический язык</span>, <span class="tableAbility">Использование заклинаний</span><span class="TCE-feature-on" style="display: inline;">, <span class="tableAbility">Дополнительные заклинания</span></span></td>
<td>2</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td>
<td><span class="tableAbility">Круг друидов</span>, <span class="tableAbility">Дикий облик</span><span class="TCE-feature-on" style="display: inline;">, <span class="tableAbility">Дикий спутник</span></span></td>
<td>2</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td>
<td>-</td>
<td>2</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Улучшение дикого облика</span>, <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on" style="display: inline;">, <span class="tableAbility">Универсальность заговоров</span></span></td>
<td>3</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td>
<td>-</td>
<td>3</td><td>4</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>6</td><td>+3</td>
<td><span class="tableAbility">Умение круга друидов</span></td>
<td>3</td><td>4</td><td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>7</td><td>+3</td>
<td>-</td>
<td>3</td><td>4</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>8</td><td>+3</td>
<td><span class="tableAbility">Улучшение дикого облика</span>, <span class="tableAbility">Увеличение характеристик</span></td>
<td>3</td><td>4</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>9</td><td>+4</td>
<td>-</td>
<td>3</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>10</td><td>+4</td>
<td><span class="tableAbility">Умение круга друидов</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>11</td><td>+4</td>
<td>-</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>12</td><td>+4</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>13</td><td>+5</td>
<td>-</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>14</td><td>+5</td>
<td><span class="tableAbility">Умение круга друидов</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>15</td><td>+5</td>
<td>-</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>17</td><td>+6</td>
<td>-</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>18</td><td>+6</td>
<td><span class="tableAbility">Безвременное тело</span>, <span class="tableAbility">Заклинания зверя</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Архидруид</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4>
<p><strong>Кость Хитов: </strong><span class="dice"><span>1к8</span></span> за каждый уровень друида</p>
<p><strong>Хиты на 1 уровне:</strong> 8 + ваш модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к8</span></span> (или 5) + модификатор Телосложения (суммарно минимум 1) за каждый уровень друида после первого</p>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
<p><strong>Доспехи:</strong> <span class="additionalAbility">Лёгкие доспехи</span>, <span class="additionalAbility">средние доспехи</span>, <span class="additionalAbility">щиты</span> (друиды не носят доспехи и щиты из металла)</p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Боевые посохи</span>, <span class="additionalAbility">булавы</span>, <span class="additionalAbility">дротики</span>, <span class="additionalAbility">дубинки</span>, <span class="additionalAbility">кинжалы</span>, <span class="additionalAbility">копья</span>, <span class="additionalAbility">метательные копья</span>, <span class="additionalAbility">пращи</span>, <span class="additionalAbility">серпы</span>, <span class="additionalAbility">скимитары</span></p>
<p><strong>Инструменты:</strong> <span class="tooltipstered tooltip" tooltip-for="tools.herbalist">Набор травника</span></p>
<p><strong>Спасброски: </strong>Интеллект, Мудрость</p>
<p><strong>Навыки:</strong> Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.perception">Восприятие</span>, <span class="tooltipstered tooltip" tooltip-for="skill.survival">Выживание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.arcana">Магия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.medicine">Медицина</span>, <span class="tooltipstered tooltip" tooltip-for="skill.animalHandling">Уход за животными</span>, <span class="tooltipstered tooltip" tooltip-for="skill.nature">Природа</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.religion">Религия</span></p>
<h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4>
<p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">деревянный щит</span> или б) одно <span class="additionalAbility">простое оружие</span></li>
<li>а) <span class="additionalAbility">скимитар</span> или б) <span class="additionalAbility">простое рукопашное оружие</span></li>
<li><span class="additionalAbility">Кожаный доспех</span>, <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span> и <span class="additionalAbility">фокусировка друидов</span></li></ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>2к4 × 10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "друидический язык": `
	<h3 class="underlined"><span id="feature.druidic">ДРУИДИЧЕСКИЙ ЯЗЫК</span></h3>
	<p><em>1-й уровень, умение друида</em></p>
	<p>Вы знаете Друидический язык — тайный язык друидов. Вы можете на нём говорить и оставлять тайные послания. Вы и все, кто знают этот язык, автоматически замечаете эти послания. Другие замечают присутствие послания при успешной проверке Мудрости (<span tooltip-for="skill.perception" class="tooltipstered tooltip">Восприятие</span>) Сл 15, но без помощи магии не могут расшифровать его.</p>
	
	<br>`,
    "использование заклинаний": `
	<h3 class="underlined"><span id="feature.spellcasting">Использование заклинаний</span></h3>
	<p><em>1-й уровень, умение друида</em></p>
	<p>Для накладывания заклинаний друиды пользуются сакральной эссенцией самой природы, облачая в неё свою волю. Вы найдёте список заклинаний, доступных друиду в этом разделе: <a href="/spells/?search=&amp;class=22"><strong>заклинания друида</strong></a>. Так же правила по использованию заклинаний есть в этой статье: <a href="/articles/mechanics/157-spellcasting/"><strong style=""><em> использование заклинаний</em></strong></a>.</p>
	<h4 class="smallSectionTitle">Заговоры (заклинания 0-го уровня)</h4>
	<p>На 1-м уровне вы знаете два <a href="/spells/?search=&amp;level=0&amp;class=22"><strong>заговора</strong></a> на ваш выбор из списка заклинаний друида. Вы узнаёте дополнительные заговоры друида на более высоких уровнях, как показано в колонке «Известные заговоры».</p>
	<h4 class="smallSectionTitle">Подготовка и сотворение заклинаний</h4>
	<p>Таблица «<a href="#druid">Друид</a>» показывает, какое количество ячеек для накладывания заклинаний друида у вас есть на первом и более высоких уровнях. Для накладывания одного из этих заклинаний вы должны потратить ячейку заклинания того же уровня или выше, что и само заклинание. Вы восстановите все потраченные ячейки, когда завершите продолжительный отдых. Вы подготавливаете список заклинаний друида, доступных для накладывания. При этом вы выбираете <strong>число заклинаний друида из списка заклинаний друида, равное модификатору Мудрости + уровень друида (минимум одно заклинание)</strong>. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний.</p>
	<p>Например, если вы друид 3-го уровня, то у вас есть четыре ячейки заклинаний 1-го уровня и две ячейки 2-го уровня. При Мудрости 16 ваш список подготовленных заклинаний может включать в себя шесть заклинаний 1-го или 2-го уровня, в любой комбинации. Если вы подготовили заклинание 1-го уровня <a href="/spells/145-cure_wounds/">лечение ран [cure wounds]</a>, вы можете наложить его, используя ячейку 1-го уровня или ячейку 2-го уровня. Накладывание заклинания не удаляет его из списка подготовленных заклинаний.</p>
	<p>Вы можете изменить список подготовленных заклинаний, когда завершаете продолжительный отдых. Подготовка нового списка заклинаний друида требует времени, проведённого в молитвах и медитации: не менее 1 минуты за уровень заклинания для каждого заклинания в вашем списке.</p>
	<h4 class="smallSectionTitle">Базовая характеристика заклинаний</h4>
	<p>Друидические заклинания накладываются с помощью Мудрости, поскольку требуют веры и близости с природой. Вы используете Мудрость в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете модификатор Мудрости при определении Сл спасбросков от ваших заклинаний друида, и при броске атаки заклинаниями.</p>
	<p style="text-align: center; "><strong>Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Мудрости</p>
	<p style="text-align: center; "><strong>Модификатор броска атаки</strong> = ваш бонус мастерства + ваш модификатор Мудрости</p>
	<h4 class="smallSectionTitle">Ритуальное колдовство</h4>
	<p>Вы можете сотворить заклинание друида как ритуал, если у этого заклинания есть ключевое слово «ритуал», и оно подготовлено вами.</p>
	<h4 class="smallSectionTitle">Фокусировка заклинания</h4>
	<p>Вы можете использовать фокусировку друидов в качестве заклинательной фокусировки для заклинаний друида.</p>
	<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">СВЯЩЕННЫЕ РАСТЕНИЯ</h3><span class="spoiler_body">
	<p>Некоторые растения считаются священными у друидов. В частности, это берёза, бузина, дуб, ива, можжевельник, ольха, омела, орех, падуб (он же остролист), рябина, тис и ясень. Эти растения часто используются в изготовлении друидической фокусировки, которая может включать, например, ветви дуба или тиса, побеги омелы.</p>
	<p>Древесина подходит и для других изделий, включая оружие и щиты. Тис связан со смертью и перерождением, так что из него делают рукояти скимитаров и серпов. Ясень символизирует жизнь, а дуб — силу: из них получаются замечательные древки, дубины, боевые посохи и щиты. Ольху считают растением воздуха и делают из неё метательное оружие, например, дротики и метательные копья. Друиды из мест, которым эти растения чужды, обращаются к местным видам. Например, пустынный друид может почитать юкку и кактус.</p>
	</span></div>
	
	<div class="TCE-feature-on" style="display: block;">
	<br>`,
    "дополнительные заклинания друидов": `
	<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания друидов</span></h3>
	<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение друида </em></p>
	<p>Заклинания из представленного ниже списка расширяют ваш список заклинаний друида, представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа. Если заклинание может быть наложено как ритуал, то в скобках также будет указано «ритуал».</p>
	<br><div class="table-wrapper"><table><tbody>
	<tr class="table_header"><td>Уровень<br>заклинания</td><td>Заклинания</td></tr>
	<tr><td>1</td><td><a href="/spells/99-protection_from_evil_and_good/">защита от зла и добра [protection from evil and good]</a></td></tr>
	<tr><td>2</td><td><a href="/spells/18-continual_flame/">вечный огонь [continual flame]</a>, <a href="/spells/40-augury/">гадание [augury]</a> (ритуал), <a href="/spells/3063-summon_beast/">призыв духа зверя [summon beast]</a>, <a href="/spells/355-enlarge_reduce/">увеличение/уменьшение [enlarge/reduce]</a></td></tr>
	<tr><td>3</td><td><a href="/spells/3-aura_of_vitality/">аура живучести [aura of vitality]</a>, <a href="/spells/24-revivify/">возрождение [revivify]</a>, <a href="/spells/3070-summon_fey/">призыв духа феи [summon fey]</a>, <a href="/spells/339-elemental_weapon/">стихийное оружие [elemental weapon]</a></td></tr>
	<tr><td>4</td><td><a href="/spells/206-fire_shield/">огненный щит [fire shield]</a>, <a href="/spells/266-divination/">предсказание [divination]</a> (ритуал), <a href="/spells/3068-summon_elemental/">призыв духа стихии [summon elemental]</a></td></tr>
	<tr><td>5</td><td><a href="/spells/133-cone_of_cold/">конус холода [cone of cold]</a></td></tr>
	<tr><td>6</td><td><a href="/spells/209-flesh_to_stone/">окаменение [flesh to stone]</a></td></tr>
	<tr><td>7</td><td><a href="/spells/114-symbol/">знак [symbol]</a></td></tr>
	<tr><td>8</td><td><a href="/spells/34-incendiary_cloud/">воспламеняющаяся туча [incendiary cloud]</a></td></tr>
	</tbody></table></div>
	</div>
	
	<br>`,
    "дикий облик": `
	<h3 class="underlined"><span id="feature.wild-shape">Дикий облик</span></h3>
	<p><em>2-й уровень, умение друида</em></p>
	<p>Действием вы можете магическим образом принять облик любого Зверя, которого вы видели. Вы можете использовать это умение два раза, восстанавливая использования после короткого или продолжительного отдыха.</p>
	<p>Уровень друида определяет, в каких Зверей можно превращаться. Например, на 2-м уровне можно превращаться в животное с показателем опасности не более 1/4 без скорости полёта и плавания.</p>
	<h4 class="tableTitle">Облик ЗВЕРЯ</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header"><td>Уровень</td><td>Макс. ПО</td><td>Ограничения</td><td>Список</td><td>Пример</td></tr>
	<tr><td>2</td><td>¼</td><td>Без скорости плавания и полёта</td><td><a href="/bestiary/?search=&amp;type=22&amp;danger=10%7C11%7C12&amp;speed=-2%7C-3">список</a></td><td><a href="/bestiary/2-wolf/">Волк [wolf]</a></td></tr>
	<tr><td>4</td><td>½</td><td>Без скорости полёта</td><td><a href="/bestiary/?search=&amp;type=22&amp;danger=10%7C11%7C12%7C13&amp;speed=-3">список</a></td><td><a href="/bestiary/372-crocodile/">Крокодил [crocodile]</a></td></tr>
	<tr><td>8</td><td>1</td><td>-</td><td><a href="/bestiary/?search=&amp;type=22&amp;danger=10%7C11%7C12%7C13%7C14">список</a></td><td><a href="/bestiary/356-giant_eagle/">Гигантский орел [giant eagle]</a></td></tr>
	</tbody></table></div>
	<p>В облике зверя можно оставаться количество часов, равное половине уровня друида (округляя в меньшую сторону). Затем друид возвращается в нормальный облик, если только не потратит еще одно использование «Дикого облика». Бонусным действием можно вернуться в нормальный облик досрочно. <span tooltip-for="condition.unconscious" class="tooltipstered tooltip">Бессознательный</span>, доведённый до 0 хитов или мёртвый друид сразу возвращается в нормальный облик.</p>
	<p>Когда вы превращены, действуют следующие правила:</p>
	<ul>
	<li>Вся игровая статистика берётся из статистики Зверя, но сохраняются мировоззрение, личность и значения Интеллекта, Мудрости и Харизмы. Также у вас остаются владения навыками и спасбросками в дополнение к таковым нового облика. Если владение есть и у вас, и у Зверя, но у него бонус выше, используется бонус Зверя. Легендарные действия и действия в логове недоступны.</li>
	<li>Когда вы превращены, вы принимаете хиты и Кость Хитов Зверя. Вернувшись в нормальный облик, ваши хиты будут такими же, как до превращения. Однако, если вы вернулись в свой облик из-за того, что ваши хиты опустились до 0, «лишний» урон переносится на нормальный облик. Например, если вы в облике Зверя получили 10 урона, имея при этом 1 хит, то вы возвращаетесь в нормальный облик и получаете 9 урона. Если этот урон не довёл хиты персонажа до 0, он не теряет сознание.</li>
	<li>Вы не можете накладывать заклинания, а речь и действия, требующие рук, могут быть ограничены видом Зверя. Превращение не прерывает вашу концентрацию на уже наложенных заклинаниях и не мешает совершать действия, являющиеся частью заклинания, такие как в случае заклинания <a href="/spells/272-call_lightning/">призыв молнии [call lightning]</a>.</li>
	<li>Вы сохраняете преимущества от всех умений класса, расы и прочих источников и можете пользоваться ими, если этому не препятствует новый физический облик. Однако недоступны особые чувства, такие как <span tooltip-for="vision.darkvision" class="tooltipstered tooltip">тёмное зрение</span>, если только их нет у Зверя.</li>
	<li>Вы выбираете, упадет ли ваше снаряжение на землю в вашем пространстве, сольется с вашей новой формой или будет надето на нее. Носимое снаряжение функционирует как обычно, но Мастер решает, может ли новая форма, в зависимости от сложения и размера, носить тот или иной предмет снаряжения. Снаряжение не меняет форму и размер под новый облик, и если оно не подходит новому облику, оно должно остаться на земле или слиться с новым обликом. Слившееся с обликом снаряжение не работает, пока вы опять не примете свой облик.</li>
	</ul>
	<h2 class="bigSectionTitle hide-next hide-next-h2">Изучение дикого облика</h2><div class="hide-wrapper">
	<p>Умение «Дикий облик» в <em>«Книге игрока» </em>позволяет превращаться в зверя, которого вы видели. Это правило даёт вам потрясающую гибкость, позволяя легко изучить множество животных обликов, но вы должны соблюдать ограничения таблицы «Дикий облик» в <em>«Книге игрока»</em>.</p>
	<p>Когда вы получаете умение «Дикий облик» на 2-м уровне друида, вы можете задаться вопросом, каких зверей вы уже видели. Следующие таблицы распределяют зверей из <em>«Бестиария»</em> по их наиболее вероятным средам обитания. Подумайте, в какой среде вырос ваш друид, а затем обратитесь к соответствующей таблице за списком зверей, которых, вероятно, видел ваш друид ко 2-му уровню.</p>
	<p>Эти таблицы также могут помочь вам и вашему Мастеру определить, каких зверей вы можете увидеть в своих путешествиях. Кроме того, они включают в себя показатель опасности каждого зверя и наличие у зверя скорости полёта или плавания. Эта информация поможет вам определить, можете ли вы принять форму этого зверя.</p>
	<p>Таблицы включают в себя всех отдельных зверей, которые могут быть использованы для дикого облика (до показателя опасности 1) или для умения «Облики круга» в <a href="#circle.moon" target="_blank">круге луны</a> (до показателя опасности 6).</p>
	
	<br>
	<h4 class="tableTitle">Арктика</h4>
	
	<div class="table-wrapper"><table><tbody><tr class="table_header"><td>ПО</td><td>Животное</td><td>Скорость полёта/плаванья</td></tr><tr><td>0</td><td><a href="/bestiary/408-owl/" target="_blank">сова [owl]</a></td><td>Скорость полёта</td></tr>
	<tr><td>1/8</td><td>
	<a href="/bestiary/371-blood_hawk/" target="_blank">кровавый ястреб [blood Hawk]</a>
	</td><td>Скорость полёта
	
	</td></tr>
	<tr><td>1/4</td><td>
	<a href="/bestiary/343-giant_owl/" target="_blank">гигантская сова [giant owl]</a>
	</td><td>Скорость полёта
	
	</td></tr>
	<tr><td>1</td><td>
	<a href="/bestiary/330-brown_bear/" target="_blank">бурый медведь [brown bear]</a>
	</td><td>
	—
	</td></tr>
	<tr><td>2</td><td>
	<a href="/bestiary/328-polar_bear/" target="_blank">белый медведь [polar bear]</a>
	</td><td>Скорость плавания</td></tr>
	
	<tr><td>2</td><td>
	<a href="/bestiary/405-saber_toothed_tiger/" target="_blank">саблезубый тигр [saber-toothed tiger]</a>
	</td><td>—</td></tr>
	
	<tr><td>6</td><td>
	<a href="/bestiary/381-mammoth/" target="_blank">мамонт [mammoth]</a>
	</td><td>—</td></tr>
	</tbody></table></div>
	
	<br>
	<h4 class="tableTitle">Болото</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/373-rat/" target="_blank">крыса [rat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/333-raven/" target="_blank">ворон [raven]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/336-giant_rat/" target="_blank">гигантская крыса [giant rat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/416-poisonous_snake/" target="_blank">ядовитая змея [poisonous snake]</a></td>
	<td>Скорость плавания</td></tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/411-constrictor_snake/" target="_blank">удав [constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/340-giant_frog/" target="_blank">гигантская лягушка [giant frog]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/346-giant_lizard/" target="_blank">гигантская ящерица [giant lizard]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/345-giant_poisonous_snake/" target="_blank">гигантская ядовитая змея [giant poisonous snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/372-crocodile/" target="_blank">крокодил [crocodile]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/3-giant_spider/" target="_blank">гигантский паук [giant spider]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/337-giant_toad/" target="_blank">гигантская жаба [giant toad]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/360-giant_constrictor_snake/" target="_blank">гигантский удав [giant constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>5</td>
	<td><a href="/bestiary/352-giant_crocodile/" target="_blank">гигантский крокодил [giant crocodile]</a></td>
	<td>Скорость плавания</td>
	</tr>
	</tbody>
	</table></div>
	
	<br>
	<h4 class="tableTitle">Горы</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/388-eagle/" target="_blank">орел [eagle]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/367-goat/" target="_blank">козел [goat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/371-blood_hawk/" target="_blank">кровавый ястреб [blood Hawk]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/92-pteranodon/" target="_blank">птеранодон [pteranodon]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/350-giant_goat/" target="_blank">гигантский козел [giant goat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/356-giant_eagle/" target="_blank">гигантский орёл [giant eagle]</a></td>
	<td>Скорость полёта</td>
	</tr><tr>
	<td>1</td>
	<td><a href="/bestiary/375-lion/" target="_blank">лев [lion]</a></td>
	<td>—</td>
	</tr><tr>
	<td>2</td>
	<td><a href="/bestiary/353-giant_elk/" target="_blank">гигантский лось [giant elk]</a></td>
	<td>—</td>
	</tr><tr>
	<td>2</td>
	<td><a href="/bestiary/405-saber_toothed_tiger/" target="_blank">саблезубый тигр [saber-toothed tiger]</a></td>
	<td>—</td>
	</tr>
	</tbody>
	</table></div>
	
	<br>
	<h4 class="tableTitle">Лес</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/326-baboon/" target="_blank">бабуин [baboon]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/327-badger/" target="_blank">барсук [badger]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/369-cat/" target="_blank">кошка [cat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/387-deer/" target="_blank">олень [deer]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/361-hyena/" target="_blank">гиена [hyena]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/408-owl/" target="_blank">сова [owl]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/371-blood_hawk/" target="_blank">кровавый ястреб [blood Hawk]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/376-flying_snake/" target="_blank">летающая змея [flying snake]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/336-giant_rat/" target="_blank">гигантская крыса [giant rat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/338-giant_weasel/" target="_blank">гигантская куница [giant weasel]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/416-poisonous_snake/" target="_blank">ядовитая змея [poisonous snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/382-mastiff/" target="_blank">мастиф [mastiff]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/365-boar/" target="_blank">кабан [boar]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/411-constrictor_snake/" target="_blank">удав [constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/378-elk/" target="_blank">лось [elk]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/347-giant_badger/" target="_blank">гигантский барсук [giant badger]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/339-giant_bat/" target="_blank">гигантская летучая мышь [giant bat]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/340-giant_frog/" target="_blank">гигантская лягушка [giant frog]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/346-giant_lizard/" target="_blank">гигантская ящерица [giant lizard]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/343-giant_owl/" target="_blank">гигантская сова [giant owl]</a></td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/345-giant_poisonous_snake/" target="_blank">гигантская ядовитая змея [giant poisonous snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/358-giant_wolf_spider/" target="_blank">гигантский паук-волк [giant wolf spider]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/391-panther/" target="_blank">пантера [panther]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/2-wolf/" target="_blank">волк [wolf]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/413-ape/" target="_blank">человекообразная обезьяна [ape]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/414-black_bear/" target="_blank">черный медведь [black bear]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/342-giant_wasp/" target="_blank">гигантская оса [giant wasp]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/330-brown_bear/" target="_blank">бурый медведь [brown bear]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/297-dire_wolf/" target="_blank">лютый волк [dire wolf]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/335-giant_hyena/" target="_blank">гигантская гиена [giant hyena]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/3-giant_spider/" target="_blank">гигантский паук [giant spider]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/337-giant_toad/" target="_blank">гигантская жаба [giant toad]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/409-tiger/" target="_blank">тигр [tiger]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/349-giant_boar/" target="_blank">гигантский кабан [giant boar]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/360-giant_constrictor_snake/" target="_blank">гигантский удав [giant constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/353-giant_elk/" target="_blank">гигантский лось [giant elk]</a></td>
	<td>—</td>
	</tr>
	</tbody>
	</table></div>
	
	
	<br>
	<h4 class="tableTitle">Луг</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/369-cat/" target="_blank">кошка [cat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/387-deer/" target="_blank">олень [deer]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/388-eagle/" target="_blank">орел [eagle]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/367-goat/" target="_blank">козел [goat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/361-hyena/" target="_blank">гиена [hyena]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/415-jackal/" target="_blank">шакал [jackal]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/362-vulture/" target="_blank">гриф [vulture]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/371-blood_hawk/" target="_blank">кровавый ястреб [blood Hawk]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/376-flying_snake/" target="_blank">летающая змея [flying snake]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/338-giant_weasel/" target="_blank">гигантская куница [giant weasel]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/416-poisonous_snake/" target="_blank">ядовитая змея [poisonous snake]</a></td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/410-axe_beak/" target="_blank">топороклюв [axe beak]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/365-boar/" target="_blank">кабан [boar]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/378-elk/" target="_blank">лось [elk]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/345-giant_poisonous_snake/" target="_blank">гигантская ядовитая змея [giant poisonous snake]</a></td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/358-giant_wolf_spider/" target="_blank">гигантский паук-волк [giant wolf spider]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/391-panther/" target="_blank">пантера [panther]</a>&nbsp;<strong>(леопард)</strong></td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/92-pteranodon/" target="_blank">птеранодон [pteranodon]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/363-riding_horse/" target="_blank">ездовая лошадь [riding horse]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/2-wolf/" target="_blank">волк [wolf]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/350-giant_goat/" target="_blank">гигантский козел [giant goat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/342-giant_wasp/" target="_blank">гигантская оса [giant wasp]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/356-giant_eagle/" target="_blank">гигантский орёл [giant eagle]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/335-giant_hyena/" target="_blank">гигантская гиена [giant hyena]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/348-giant_vulture/" target="_blank">гигантский гриф [giant vulture]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/375-lion/" target="_blank">лев [lion]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/409-tiger/" target="_blank">тигр [tiger]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/88-allosaurus/" target="_blank">аллозавр [allosaurus]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/349-giant_boar/" target="_blank">гигантский кабан [giant boar]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/353-giant_elk/" target="_blank">гигантский лось [giant elk]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/386-rhinoceros/" target="_blank">носорог [rhinoceros]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>3</td>
	<td><a href="/bestiary/89-ankylosaurus/" target="_blank">анкилозавр [ankylosaurus]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>4</td>
	<td><a href="/bestiary/407-elephant/" target="_blank">слон [elephant]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>5</td>
	<td><a href="/bestiary/93-triceratops/" target="_blank">трицератопс [triceratops]</a></td>
	<td>—</td>
	</tr>
	</tbody>
	</table></div>
	
	
	<br>
	<h4 class="tableTitle">Побережье</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/370-crab/" target="_blank">краб [crab]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/388-eagle/" target="_blank">орел [eagle]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/371-blood_hawk/" target="_blank">кровавый ястреб [blood Hawk]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/351-giant_crab/" target="_blank">гигантский краб [giant crab]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/416-poisonous_snake/" target="_blank">ядовитая змея [poisonous snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/346-giant_lizard/" target="_blank">гигантская ящерица [giant lizard]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/358-giant_wolf_spider/" target="_blank">гигантский паук-волк [giant wolf spider]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/92-pteranodon/" target="_blank">птеранодон [pteranodon]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/356-giant_eagle/" target="_blank">гигантский орёл [giant eagle]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/337-giant_toad/" target="_blank">гигантская жаба [giant toad]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/90-plesiosaurus/" target="_blank">плезиозавр [plesiosaurus]</a></td>
	<td>Скорость плавания</td>
	</tr>
	</tbody>
	</table></div>
	
	
	<br>
	<h4 class="tableTitle">Под водой</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/366-quipper/" target="_blank">квиппер [quipper]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/411-constrictor_snake/" target="_blank">удав [constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/354-giant_sea_horse/" target="_blank">гигантский морской конек [giant sea horse]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/398-reef_shark/" target="_blank">рифовая акула [reef shark]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/357-giant_octopus/" target="_blank">гигантский осьминог [giant octopus]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/360-giant_constrictor_snake/" target="_blank">гигантский удав [giant constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/390-hunter_shark/" target="_blank">охотничья акула [hunter shark]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/90-plesiosaurus/" target="_blank">плезиозавр [plesiosaurus]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>3</td>
	<td><a href="/bestiary/368-killer_whale/" target="_blank">косатка [killer whale]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>5</td>
	<td><a href="/bestiary/334-giant_shark/" target="_blank">гигантская акула [giant shark]</a></td>
	<td>Скорость плавания</td>
	</tr>
	</tbody>
	</table></div>
	
	
	<br>
	<h4 class="tableTitle">Подземье</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/355-giant_fire_beettle/" target="_blank">гигантский огненный жук [giant fire beettle]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/336-giant_rat/" target="_blank">гигантская крыса [giant rat]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/339-giant_bat/" target="_blank">гигантская летучая мышь [giant bat]</a></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/341-giant_centipede/" target="_blank">гигантская многоножка [giant centipede]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/346-giant_lizard/" target="_blank">гигантская ящерица [giant lizard]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/345-giant_poisonous_snake/" target="_blank">гигантская ядовитая змея [giant poisonous snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/3-giant_spider/" target="_blank">гигантский паук [giant spider]</a></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/337-giant_toad/" target="_blank">гигантская жаба [giant toad]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/360-giant_constrictor_snake/" target="_blank">гигантский удав [giant constrictor snake]</a></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/328-polar_bear/" target="_blank">белый медведь [polar bear]</a><strong>&nbsp;(пещерный медведь)</strong></td>
	<td>Скорость плавания</td>
	</tr>
	</tbody>
	</table></div>
	
	
	<br>
	<h4 class="tableTitle">Пустыня</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/369-cat/" target="_blank">кошка [cat]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/361-hyena/" target="_blank">гиена [hyena]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/415-jackal/" target="_blank">шакал [jackal]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/406-scorpion/" target="_blank">скорпион [scorpion]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/362-vulture/" target="_blank">гриф [vulture]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/331-camel/" target="_blank">верблюд [camel]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/376-flying_snake/" target="_blank">летающая змея [flying snake]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/385-mule/" target="_blank">мул [mule]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/416-poisonous_snake/" target="_blank">ядовитая змея [poisonous snake]</a>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/411-constrictor_snake/" target="_blank">удав [constrictor snake]</a>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/346-giant_lizard/" target="_blank">гигантская ящерица [giant lizard]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/345-giant_poisonous_snake/" target="_blank">гигантская ядовитая змея [giant poisonous snake]</a>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/358-giant_wolf_spider/" target="_blank">гигантский паук-волк [giant wolf spider]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/335-giant_hyena/" target="_blank">гигантская гиена [giant hyena]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/3-giant_spider/" target="_blank">гигантский паук [giant spider]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/337-giant_toad/" target="_blank">гигантская жаба [giant toad]</a>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/348-giant_vulture/" target="_blank">гигантский гриф [giant vulture]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/375-lion/" target="_blank">лев [lion]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/360-giant_constrictor_snake/" target="_blank">гигантский удав [giant constrictor snake]</a>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>3</td>
	<td><a href="/bestiary/359-giant_scorpion/" target="_blank">гигантский скорпион [giant scorpion]</a>
	</td><td>—</td>
	</tr>
	</tbody>
	</table></div>
	
	
	<br>
	<h4 class="tableTitle">Холмы</h4>
	<div class="table-wrapper"><table>
	<tbody>
	<tr class="table_header">
	<td>ПО</td>
	<td>Животное</td>
	<td>Скорость полёта/плаванья</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/326-baboon/" target="_blank">бабуин [baboon]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/388-eagle/" target="_blank">орел [eagle]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/367-goat/" target="_blank">козел [goat]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/361-hyena/" target="_blank">гиена [hyena]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/6231-crow/" target="_blank">ворона [crow]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><a href="/bestiary/362-vulture/" target="_blank">гриф [vulture]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/371-blood_hawk/" target="_blank">кровавый ястреб [blood Hawk]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/338-giant_weasel/" target="_blank">гигантская куница [giant weasel]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/382-mastiff/" target="_blank">мастиф [mastiff]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/385-mule/" target="_blank">мул [mule]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/416-poisonous_snake/" target="_blank">ядовитая змея [poisonous snake]</a>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><a href="/bestiary/11-stirge/" target="_blank">кровопийца [stirge]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/410-axe_beak/" target="_blank">топороклюв [axe beak]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/365-boar/" target="_blank">кабан [boar]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/378-elk/" target="_blank">лось [elk]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/343-giant_owl/" target="_blank">гигантская сова [giant owl]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/358-giant_wolf_spider/" target="_blank">гигантский паук-волк [giant wolf spider]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/391-panther/" target="_blank">пантера [panther]</a><strong>&nbsp;(пума)</strong></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><a href="/bestiary/2-wolf/" target="_blank">волк [wolf]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><a href="/bestiary/350-giant_goat/" target="_blank">гигантский козел [giant goat]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/330-brown_bear/" target="_blank">бурый медведь [brown bear]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/297-dire_wolf/" target="_blank">лютый волк [dire wolf]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/356-giant_eagle/" target="_blank">гигантский орёл [giant eagle]</a>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/335-giant_hyena/" target="_blank">гигантская гиена [giant hyena]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><a href="/bestiary/375-lion/" target="_blank">лев [lion]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/349-giant_boar/" target="_blank">гигантский кабан [giant boar]</a>
	</td><td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><a href="/bestiary/353-giant_elk/" target="_blank">гигантский лось [giant elk]</a>
	</td><td>—</td>
	</tr>
	</tbody>
	</table></div>
	</div>
	
	
	<div class="TCE-feature-on" style="display: block;">
	<br>`,
    "дикий спутник": `
	<h3 class="underlined"><span id="feature.wild-companion">Дикий спутник</span></h3>
	<p><em>2-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение друида </em></p>
	<p>Вы получаете способность призывать духа, который принимает форму животного. Действием вы можете использовать «Дикий облик» для накладывания заклинания <a href="/spells/248-find_familiar/">поиск фамильяра [find familiar]</a> без затрат материальных компонентов.</p>
	<p>Когда вы накладываете это заклинание подобным образом, фамильяр считается Феей, а не Зверем. Фамильяр исчезает спустя количество часов, равное половине вашего уровня друида.</p>
	</div>
	
	<br>`,
    "круг друидов": `
	<h3 class="underlined"><span id="feature.druid-circle">КРУГ ДРУИДОВ</span></h3>
	<p><em>2-й уровень, умение друида</em></p>
	<p>Вам необходимо выбрать, в каком круге друидов состоит персонаж. Все круги описаны в конце описания класса. Этот выбор даёт дополнительные умения на 2-м, 6-м, 10-м и 14-м уровнях.</p>
	<br>`,
    "увеличение характеристик": `
	<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
	<p><em>4-й уровень, умение друида</em></p>
	<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
	
	<div class="TCE-feature-on" style="display: block;">
	<br>`,
    "универсальность заговоров": `
	<h3 class="underlined"><span id="feature.cantrip-versatility">Универсальность заговоров</span></h3>
	<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение друида </em></p>
	<p>Всякий раз, когда вы достигаете в этом классе уровня, который предоставляет вам «Увеличение характеристик», вы можете заменить один заговор, полученный умением «Использование заклинаний» этого класса, на другой заговор из списка заклинаний друида.</p>
	</div>
	<br>`,
    "безвременное тело": `
	<h3 class="underlined"><span id="feature.timeless-body">БЕЗВРЕМЕННОЕ ТЕЛО</span></h3>
	<p><em>18-й уровень, умение друида</em></p>
	<p>Пронизывающая вас природная магия замедляет старение. За каждые 10 лет ваше тело стареет только на 1 год.</p>
	<br>`,
    "заклинания зверя": `
	<h3 class="underlined"><span id="feature.beast-spells">ЗАКЛИНАНИЯ ЗВЕРЯ</span></h3>
	<p><em>18-й уровень, умение друида</em></p>
	<p>Персонаж может накладывать в диком облике заклинания друида. Будучи Зверем, вы можете использовать соматический и вербальный компоненты заклинаний друида, но не можете обеспечить материальные компоненты.</p>
	<br>`,
    архидруид: `
	<h3 class="underlined"><span id="feature.archdruid">АРХИДРУИД</span></h3>
	<p><em>20-й уровень, умение друида</em></p>
	<p>Количество применений умения «Дикий облик» не ограничено. Кроме того, вы можете игнорировать соматический и вербальный компоненты заклинаний друида, а также материальные компоненты без указанной стоимости и не расходуемые заклинанием. Это действует как в нормальном облике, так и в облике Зверя.</p>
	`,
  },
};
module.exports = details;
