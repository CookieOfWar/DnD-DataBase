const details = {
  table: `
<table class="class_table wide_table"><tbody>
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
<td><span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Дополнительные заклинания</span>, <span class="tableAbility">Вдохновение барда (к6)</span></td>
<td style="">2</td><td style="">4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td>
<td><span class="tableAbility">Мастер на все руки</span>, <span class="tableAbility">Песнь отдыха (к6)</span>, <span class="tableAbility">Магическое вдохновение</span></td>
<td>2</td><td>5</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td>
<td><span class="tableAbility">Коллегия бардов</span>, <span class="tableAbility">Компетентность</span></td>
<td style="">2</td><td style="">6</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Многогранность барда</span></td>
<td>3</td><td>7</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td>
<td><span class="tableAbility">Вдохновение барда (к8)</span>, <span class="tableAbility">Источник вдохновения</span></td>
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
<td><span class="tableAbility">Песнь отдыха (к8)</span></td>
<td style="">3</td><td style="">12</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>10</td><td>+4</td>
<td><span class="tableAbility">Вдохновение барда (к10)</span>, <span class="tableAbility">Компетентность</span>, <span class="tableAbility">Тайны магии</span></td>
<td style="">4</td><td style="">14</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr style=""><td style="">11</td><td style="">+4</td>
<td style="">-</td>
<td style="">4</td><td style="">15</td><td style="">4</td><td style="">3</td><td style="">3</td><td style="">3</td><td style="">2</td><td style="">1</td><td style="">-</td><td style="">-</td><td style="">-</td></tr>
<tr><td>12</td><td>+4</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td style="">4</td><td style="">15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>13</td><td>+5</td>
<td><span class="tableAbility">Песнь отдыха (к10)</span></td>
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
<p><strong>Инструменты:</strong> Три <span>музыкальных инструмента</span> на ваш выбор</p>
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
    "использование заклинаний": `
		<h3 class="underlined"><span id="feature.spellcasting">ИСПОЛЬЗОВАНИЕ ЗАКЛИНАНИЙ</span></h3>
<p><em style="">1-й уровень, умение барда</em></p>
<p style="">Вы научились изменять ткань реальности в соответствии с вашими волей и музыкой. Ваши заклинания являются частью вашего обширного репертуара; это магия, которой вы найдёте применение в любой ситуации. Вы найдёте список заклинаний, доступных барду в этом разделе: <span><strong style="">заклинания барда</strong></span>. Так же правила по использованию заклинаний есть в этой статье: <span><strong style=""><em> использование заклинаний</em></strong</span>.</p>
<h4 class="smallSectionTitle" style="">Заговоры (заклинания 0-го уровня)</h4>
<p style="">Вы знаете два <span>заговора</span> из списка доступных для барда на ваш выбор. При достижении более высоких уровней вы выучите новые, в соответствии с колонкой «известные заговоры».</p>
<h4 class="smallSectionTitle" style="">Ячейки заклинаний</h4>
<p style="">Таблица «<span>Бард</span>» показывает, сколько ячеек заклинаний у вас есть для заклинаний барда 1-го и других уровней. Для накладывания заклинания вы должны потратить ячейку соответствующего либо превышающего уровня. Вы восстанавливаете все потраченные ячейки в конце продолжительного отдыха. Например, если вы знаете заклинание 1-го уровня <span class="spellTip">Лечение ран</span>, и у вас есть ячейки 1-го и 2-го уровней, вы можете наложить его с помощью любой из этих ячеек.</p>
<h4 class="smallSectionTitle" style="">Известные заклинания первого и более высоких уровней</h4>
<p style="">Вы знаете четыре заклинания 1-го уровня на свой выбор из списка доступных барду.</p>
<p style="">Колонка «<span>известные заклинания</span>» показывает, когда вы сможете выучить новые заклинания. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний. Например, когда вы достигнете 3-го уровня в этом классе, вы можете выучить одно новое заклинание 1-го или 2-го уровня.</p>
<p style="">Кроме того, когда вы получаете новый уровень в этом классе, вы можете одно из известных вам заклинаний барда заменить на другое из списка барда, уровень которого тоже должен соответствовать имеющимся ячейкам заклинаний.</p>
<h4 class="smallSectionTitle" style="">Базовая характеристика заклинаний</h4>
<p style="">При накладывании заклинаний бард использует свою Харизму. Ваша магия проистекает из сердечности и душевности, которую вы вкладываете в исполнение музыки и произнесение речей. Вы используете Харизму в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете Харизму при определении Сл спасбросков от ваших заклинаний, и при броске атаки заклинаниями.</p>
<p style="text-align: center;"><strong style="">Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Харизмы</p>
<p style="text-align: center;"><strong style="">Модификатор броска атаки </strong>= ваш бонус мастерства + ваш модификатор Харизмы</p>
<h4 class="smallSectionTitle" style="">Ритуальное колдовство</h4>
<p style="">Вы можете сотворить любое известное вам заклинание барда в качестве ритуала, если заклинание позволяет это.</p>
<h4 class="smallSectionTitle" style="">Фокусировка заклинания</h4>
<p style="">Вы можете использовать музыкальный инструмент в качестве фокусировки для ваших заклинаний барда.</p>
		`,
    "дополнительные заклинания": `
<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания барда</span></h3>
<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение барда</em></p>
<p>Заклинания в <span>следующем списке</span> расширяют список заклинаний барда из <em>«Книги игрока»</em>. Список отсортирован по уровню заклинаний, а не по уровню персонажа. Если заклинание может быть исполнено как ритуал, то в скобках также будет указано «ритуал».</p>
<h4 class="tableTitle">Бард</h4>
<div class="table-wrapper"><table class=".td_1__centered"><tbody>
<tr class="table_header"><td style="text-align: center;">Уровень<br>заклинания</td><td>Заклинания</td></tr>
<tr><td>1</td><td><span class="spellTip">Приказ</span>, <span class="spellTip">Сверкающие брызги</span></td></tr>
<tr><td>2</td><td><span class="spellTip">Отражения</span>, <span class="spellTip">Подмога</span>, <span class="spellTip">Увеличение/уменьшение</span></td></tr>
<tr><td>3</td><td><span class="spellTip">Замедление</span>, <span class="spellTip">Крепость интеллекта</span>, <span class="spellTip">Множественное лечащее слово</span></td></tr>
<tr><td>4</td><td><span class="spellTip">Воображаемый убийца</span></td></tr>
<tr><td>5</td><td><span class="spellTip">Ментальная связь Рэри</span> (ритуал)</td></tr>
<tr><td>6</td><td><span class="spellTip">Пир героев</span></td></tr>
<tr><td>7</td><td><span class="spellTip">Радужные брызги</span>, <span class="spellTip">Сон синей вуали</span></td></tr>
<tr><td>8</td><td><span class="spellTip">Антипатия/симпатия</span></td></tr>
<tr><td>9</td><td><span class="spellTip">Радужная стена</span></td></tr>
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
<p>Вы углубляетесь в традиции выбранной вами коллегии бардов. Все коллегии описаны <span>ниже</span>. Этот выбор предоставляет вам умения на 3-м, 6-м и 14-м уровнях.</p>

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
<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <span class="feat">черту</span>.</p>

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
<p>Теперь эти заклинания считаются для вас заклинаниями барда и учитываются в общем количестве известных вам заклинаний согласно таблице «<span>Бард</span>». Ещё по два заклинания других классов вы выучите на 14-м и 18-м уровнях.</p>

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
