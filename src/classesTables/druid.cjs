const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header wide_table">
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
	<p>Для накладывания заклинаний друиды пользуются сакральной эссенцией самой природы, облачая в неё свою волю. Вы найдёте список заклинаний, доступных друиду в этом разделе: <span><strong>заклинания друида</strong></span>. Так же правила по использованию заклинаний есть в этой статье: <span><strong style=""><em> использование заклинаний</em></strong</span>.</p>
	<h4 class="smallSectionTitle">Заговоры (заклинания 0-го уровня)</h4>
	<p>На 1-м уровне вы знаете два <span><strong>заговора</strong></span> на ваш выбор из списка заклинаний друида. Вы узнаёте дополнительные заговоры друида на более высоких уровнях, как показано в колонке «Известные заговоры».</p>
	<h4 class="smallSectionTitle">Подготовка и сотворение заклинаний</h4>
	<p>Таблица «<span>Друид</span>» показывает, какое количество ячеек для накладывания заклинаний друида у вас есть на первом и более высоких уровнях. Для накладывания одного из этих заклинаний вы должны потратить ячейку заклинания того же уровня или выше, что и само заклинание. Вы восстановите все потраченные ячейки, когда завершите продолжительный отдых. Вы подготавливаете список заклинаний друида, доступных для накладывания. При этом вы выбираете <strong>число заклинаний друида из списка заклинаний друида, равное модификатору Мудрости + уровень друида (минимум одно заклинание)</strong>. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний.</p>
	<p>Например, если вы друид 3-го уровня, то у вас есть четыре ячейки заклинаний 1-го уровня и две ячейки 2-го уровня. При Мудрости 16 ваш список подготовленных заклинаний может включать в себя шесть заклинаний 1-го или 2-го уровня, в любой комбинации. Если вы подготовили заклинание 1-го уровня <span class="spellTip">Лечение ран</span>, вы можете наложить его, используя ячейку 1-го уровня или ячейку 2-го уровня. Накладывание заклинания не удаляет его из списка подготовленных заклинаний.</p>
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
    "дополнительные заклинания": `
	<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания друидов</span></h3>
	<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение друида </em></p>
	<p>Заклинания из представленного ниже списка расширяют ваш список заклинаний друида, представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа. Если заклинание может быть наложено как ритуал, то в скобках также будет указано «ритуал».</p>
	<br><div class="table-wrapper"><table><tbody>
	<tr class="table_header"><td>Уровень<br>заклинания</td><td>Заклинания</td></tr>
	<tr><td>1</td><td><span class="spellTip">Защита от зла и добра</span></td></tr>
	<tr><td>2</td><td><span class="spellTip">Вечный огонь</span>, <span class="spellTip">Гадание</span> (ритуал), <span class="spellTip">Призыв духа зверя</span>, <span class="spellTip">Увеличение/уменьшение</span></td></tr>
	<tr><td>3</td><td><span class="spellTip">Аура живучести</span>, <span class="spellTip">Возрождение</span>, <span class="spellTip">Призыв духа феи</span>, <span class="spellTip">Стихийное оружие</span></td></tr>
	<tr><td>4</td><td><span class="spellTip">Огненный щит</span>, <span class="spellTip">Предсказание</span> (ритуал), <span class="spellTip">Призыв духа стихии</span></td></tr>
	<tr><td>5</td><td><span class="spellTip">Конус холода</span></td></tr>
	<tr><td>6</td><td><span class="spellTip">Окаменение</span></td></tr>
	<tr><td>7</td><td><span class="spellTip">Знак</span></td></tr>
	<tr><td>8</td><td><span class="spellTip">Воспламеняющаяся туча</span></td></tr>
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
	<tr><td>2</td><td>¼</td><td>Без скорости плавания и полёта</td><td><span class="creature">список</span></td><td><span class="creature">Волк [wolf]</span></td></tr>
	<tr><td>4</td><td>½</td><td>Без скорости полёта</td><td><span class="creature">список</span></td><td><span class="creature">Крокодил [crocodile]</span></td></tr>
	<tr><td>8</td><td>1</td><td>-</td><td><span class="creature">список</span></td><td><span class="creature">Гигантский орел [giant eagle]</span></td></tr>
	</tbody></table></div>
	<p>В облике зверя можно оставаться количество часов, равное половине уровня друида (округляя в меньшую сторону). Затем друид возвращается в нормальный облик, если только не потратит еще одно использование «Дикого облика». Бонусным действием можно вернуться в нормальный облик досрочно. <span tooltip-for="condition.unconscious" class="tooltipstered tooltip">Бессознательный</span>, доведённый до 0 хитов или мёртвый друид сразу возвращается в нормальный облик.</p>
	<p>Когда вы превращены, действуют следующие правила:</p>
	<ul>
	<li>Вся игровая статистика берётся из статистики Зверя, но сохраняются мировоззрение, личность и значения Интеллекта, Мудрости и Харизмы. Также у вас остаются владения навыками и спасбросками в дополнение к таковым нового облика. Если владение есть и у вас, и у Зверя, но у него бонус выше, используется бонус Зверя. Легендарные действия и действия в логове недоступны.</li>
	<li>Когда вы превращены, вы принимаете хиты и Кость Хитов Зверя. Вернувшись в нормальный облик, ваши хиты будут такими же, как до превращения. Однако, если вы вернулись в свой облик из-за того, что ваши хиты опустились до 0, «лишний» урон переносится на нормальный облик. Например, если вы в облике Зверя получили 10 урона, имея при этом 1 хит, то вы возвращаетесь в нормальный облик и получаете 9 урона. Если этот урон не довёл хиты персонажа до 0, он не теряет сознание.</li>
	<li>Вы не можете накладывать заклинания, а речь и действия, требующие рук, могут быть ограничены видом Зверя. Превращение не прерывает вашу концентрацию на уже наложенных заклинаниях и не мешает совершать действия, являющиеся частью заклинания, такие как в случае заклинания <span class="spellTip">Призыв молнии</span>.</li>
	<li>Вы сохраняете преимущества от всех умений класса, расы и прочих источников и можете пользоваться ими, если этому не препятствует новый физический облик. Однако недоступны особые чувства, такие как <span tooltip-for="vision.darkvision" class="tooltipstered tooltip">тёмное зрение</span>, если только их нет у Зверя.</li>
	<li>Вы выбираете, упадет ли ваше снаряжение на землю в вашем пространстве, сольется с вашей новой формой или будет надето на нее. Носимое снаряжение функционирует как обычно, но Мастер решает, может ли новая форма, в зависимости от сложения и размера, носить тот или иной предмет снаряжения. Снаряжение не меняет форму и размер под новый облик, и если оно не подходит новому облику, оно должно остаться на земле или слиться с новым обликом. Слившееся с обликом снаряжение не работает, пока вы опять не примете свой облик.</li>
	</ul>
	<h2 class="bigSectionTitle hide-next hide-next-h2">Изучение дикого облика</h2><div class="hide-wrapper">
	<p>Умение «Дикий облик» в <em>«Книге игрока» </em>позволяет превращаться в зверя, которого вы видели. Это правило даёт вам потрясающую гибкость, позволяя легко изучить множество животных обликов, но вы должны соблюдать ограничения таблицы «Дикий облик» в <em>«Книге игрока»</em>.</p>
	<p>Когда вы получаете умение «Дикий облик» на 2-м уровне друида, вы можете задаться вопросом, каких зверей вы уже видели. Следующие таблицы распределяют зверей из <em>«Бестиария»</em> по их наиболее вероятным средам обитания. Подумайте, в какой среде вырос ваш друид, а затем обратитесь к соответствующей таблице за списком зверей, которых, вероятно, видел ваш друид ко 2-му уровню.</p>
	<p>Эти таблицы также могут помочь вам и вашему Мастеру определить, каких зверей вы можете увидеть в своих путешествиях. Кроме того, они включают в себя показатель опасности каждого зверя и наличие у зверя скорости полёта или плавания. Эта информация поможет вам определить, можете ли вы принять форму этого зверя.</p>
	<p>Таблицы включают в себя всех отдельных зверей, которые могут быть использованы для дикого облика (до показателя опасности 1) или для умения «Облики круга» в <span class="tableAbility">круге луны</span> (до показателя опасности 6).</p>
	
	<br>
	<h4 class="tableTitle">Арктика</h4>
	
	<div class="table-wrapper"><table><tbody><tr class="table_header"><td>ПО</td><td>Животное</td><td>Скорость полёта/плаванья</td></tr><tr><td>0</td><td><span class="creature">сова [owl]</span></td><td>Скорость полёта</td></tr>
	<tr><td>1/8</td><td>
	<span class="creature">кровавый ястреб [blood Hawk]</span>
	</td><td>Скорость полёта
	
	</td></tr>
	<tr><td>1/4</td><td>
	<span class="creature">гигантская сова [giant owl]</span>
	</td><td>Скорость полёта
	
	</td></tr>
	<tr><td>1</td><td>
	<span class="creature">бурый медведь [brown bear]</span>
	</td><td>
	—
	</td></tr>
	<tr><td>2</td><td>
	<span class="creature">белый медведь [polar bear]</span>
	</td><td>Скорость плавания</td></tr>
	
	<tr><td>2</td><td>
	<span class="creature">саблезубый тигр [saber-toothed tiger]</span>
	</td><td>—</td></tr>
	
	<tr><td>6</td><td>
	<span class="creature">мамонт [mammoth]</span>
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
	<td><span class="creature">крыса [rat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">ворон [raven]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантская крыса [giant rat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">ядовитая змея [poisonous snake]</span></td>
	<td>Скорость плавания</td></tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">удав [constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская лягушка [giant frog]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ящерица [giant lizard]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ядовитая змея [giant poisonous snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">крокодил [crocodile]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский паук [giant spider]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская жаба [giant toad]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский удав [giant constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>5</td>
	<td><span class="creature">гигантский крокодил [giant crocodile]</span></td>
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
	<td><span class="creature">орел [eagle]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">козел [goat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровавый ястреб [blood Hawk]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">птеранодон [pteranodon]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">гигантский козел [giant goat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский орёл [giant eagle]</span></td>
	<td>Скорость полёта</td>
	</tr><tr>
	<td>1</td>
	<td><span class="creature">лев [lion]</span></td>
	<td>—</td>
	</tr><tr>
	<td>2</td>
	<td><span class="creature">гигантский лось [giant elk]</span></td>
	<td>—</td>
	</tr><tr>
	<td>2</td>
	<td><span class="creature">саблезубый тигр [saber-toothed tiger]</span></td>
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
	<td><span class="creature">бабуин [baboon]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">барсук [badger]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">кошка [cat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">олень [deer]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гиена [hyena]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">сова [owl]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровавый ястреб [blood Hawk]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">летающая змея [flying snake]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантская крыса [giant rat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантская куница [giant weasel]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">ядовитая змея [poisonous snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">мастиф [mastiff]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">кабан [boar]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">удав [constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">лось [elk]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантский барсук [giant badger]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская летучая мышь [giant bat]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская лягушка [giant frog]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ящерица [giant lizard]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская сова [giant owl]</span></td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ядовитая змея [giant poisonous snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантский паук-волк [giant wolf spider]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">пантера [panther]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">волк [wolf]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">человекообразная обезьяна [ape]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">черный медведь [black bear]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">гигантская оса [giant wasp]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">бурый медведь [brown bear]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">лютый волк [dire wolf]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская гиена [giant hyena]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский паук [giant spider]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская жаба [giant toad]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">тигр [tiger]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский кабан [giant boar]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский удав [giant constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский лось [giant elk]</span></td>
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
	<td><span class="creature">кошка [cat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">олень [deer]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">орел [eagle]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">козел [goat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гиена [hyena]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">шакал [jackal]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гриф [vulture]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровавый ястреб [blood Hawk]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">летающая змея [flying snake]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантская куница [giant weasel]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">ядовитая змея [poisonous snake]</span></td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">топороклюв [axe beak]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">кабан [boar]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">лось [elk]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ядовитая змея [giant poisonous snake]</span></td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантский паук-волк [giant wolf spider]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">пантера [panther]</span>&nbsp;<strong>(леопард)</strong></td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">птеранодон [pteranodon]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">ездовая лошадь [riding horse]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">волк [wolf]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">гигантский козел [giant goat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">гигантская оса [giant wasp]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский орёл [giant eagle]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская гиена [giant hyena]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский гриф [giant vulture]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">лев [lion]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">тигр [tiger]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">аллозавр [allosaurus]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский кабан [giant boar]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский лось [giant elk]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">носорог [rhinoceros]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>3</td>
	<td><span class="creature">анкилозавр [ankylosaurus]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>4</td>
	<td><span class="creature">слон [elephant]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>5</td>
	<td><span class="creature">трицератопс [triceratops]</span></td>
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
	<td><span class="creature">краб [crab]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">орел [eagle]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровавый ястреб [blood Hawk]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантский краб [giant crab]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">ядовитая змея [poisonous snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ящерица [giant lizard]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантский паук-волк [giant wolf spider]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">птеранодон [pteranodon]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский орёл [giant eagle]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская жаба [giant toad]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">плезиозавр [plesiosaurus]</span></td>
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
	<td><span class="creature">квиппер [quipper]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">удав [constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">гигантский морской конек [giant sea horse]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">рифовая акула [reef shark]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский осьминог [giant octopus]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский удав [giant constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">охотничья акула [hunter shark]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">плезиозавр [plesiosaurus]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>3</td>
	<td><span class="creature">косатка [killer whale]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>5</td>
	<td><span class="creature">гигантская акула [giant shark]</span></td>
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
	<td><span class="creature">гигантский огненный жук [giant fire beettle]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантская крыса [giant rat]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская летучая мышь [giant bat]</span></td>
	<td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская многоножка [giant centipede]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ящерица [giant lizard]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ядовитая змея [giant poisonous snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский паук [giant spider]</span></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская жаба [giant toad]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский удав [giant constrictor snake]</span></td>
	<td>Скорость плавания</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">белый медведь [polar bear]</span><strong>&nbsp;(пещерный медведь)</strong></td>
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
	<td><span class="creature">кошка [cat]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гиена [hyena]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">шакал [jackal]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">скорпион [scorpion]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гриф [vulture]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">верблюд [camel]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">летающая змея [flying snake]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">мул [mule]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">ядовитая змея [poisonous snake]</span>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">удав [constrictor snake]</span>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ящерица [giant lizard]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская ядовитая змея [giant poisonous snake]</span>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантский паук-волк [giant wolf spider]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская гиена [giant hyena]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский паук [giant spider]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская жаба [giant toad]</span>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский гриф [giant vulture]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">лев [lion]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский удав [giant constrictor snake]</span>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>3</td>
	<td><span class="creature">гигантский скорпион [giant scorpion]</span>
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
	<td><span class="creature">бабуин [baboon]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">орел [eagle]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">козел [goat]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гиена [hyena]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">ворона [crow]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>0</td>
	<td><span class="creature">гриф [vulture]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровавый ястреб [blood Hawk]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">гигантская куница [giant weasel]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">мастиф [mastiff]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">мул [mule]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">ядовитая змея [poisonous snake]</span>
	</td><td>Скорость плавания</td>
	</tr>
	<tr>
	<td>1/8</td>
	<td><span class="creature">кровопийца [stirge]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">топороклюв [axe beak]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">кабан [boar]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">лось [elk]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантская сова [giant owl]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">гигантский паук-волк [giant wolf spider]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">пантера [panther]</span><strong>&nbsp;(пума)</strong></td>
	<td>—</td>
	</tr>
	<tr>
	<td>1/4</td>
	<td><span class="creature">волк [wolf]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1/2</td>
	<td><span class="creature">гигантский козел [giant goat]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">бурый медведь [brown bear]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">лютый волк [dire wolf]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантский орёл [giant eagle]</span>
	</td><td>Скорость полёта</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">гигантская гиена [giant hyena]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>1</td>
	<td><span class="creature">лев [lion]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский кабан [giant boar]</span>
	</td><td>—</td>
	</tr>
	<tr>
	<td>2</td>
	<td><span class="creature">гигантский лось [giant elk]</span>
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
	<p>Вы получаете способность призывать духа, который принимает форму животного. Действием вы можете использовать «Дикий облик» для накладывания заклинания <span class="spellTip">Поиск фамильяра</span> без затрат материальных компонентов.</p>
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
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <span class="feat">черту</span>.</p>
	
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
