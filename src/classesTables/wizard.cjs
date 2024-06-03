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
<td><span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Магическое восстановление</span>, <a href="#feature.extra-spells" style="">Дополнительные заклинания</a></td>
<td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td>
<td><a href="#feature.arcane-tradition" style="">Магические традиции</a></td>
<td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td>
<td><span class="TCE-feature-off" style="display: none;">-</span><a href="#feature.cantrip-formulas" style="">Формулы заговоров</a></td>
<td>3</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td>
<td><a href="#feature.ASI" style="">Увеличение характеристик</a></td>
<td>4</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td>
<td>-</td>
<td>4</td><td>4</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>6</td><td>+3</td>
<td><a href="#feature.arcane-tradition" style="">Умение магической традиции</a></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>7</td><td>+3</td>
<td>-</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>8</td><td>+3</td>
<td><a href="#feature.ASI" style="">Увеличение характеристик</a></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr style=""><td style="">9</td><td style="">+4</td>
<td style="">-</td>
<td style="">4</td><td style="">4</td><td style="">3</td><td style="">3</td><td style="">3</td><td style="">1</td><td style="">-</td><td style="">-</td><td style="">-</td><td style="">-</td></tr>
<tr><td>10</td><td>+4</td>
<td><span class="tableAbility">Умение магической традиции</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>11</td><td>+4</td>
<td>-</td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>12</td><td>+4</td>
<td><a href="#feature.ASI" style="">Увеличение характеристик</a></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr style=""><td style="">13</td><td style="">+5</td>
<td style="">-</td>
<td style="">5</td><td style="">4</td><td style="">3</td><td style="">3</td><td style="">3</td><td style="">2</td><td style="">1</td><td style="">1</td><td style="">-</td><td style="">-</td></tr>
<tr><td>14</td><td>+5</td>
<td><a href="#feature.arcane-tradition" style="">Умение магической традиции</a></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>15</td><td>+5</td>
<td>-</td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>17</td><td>+6</td>
<td>-</td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>18</td><td>+6</td>
<td><span class="tableAbility">Мастерство заклинателя</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Фирменное заклинание</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4><p><strong>Кость Хитов: </strong><span class="dice"><span>1к6</span></span> за каждый уровень волшебника</p>
<p><strong>Хиты на 1 уровне: </strong>6 + ваш модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к6</span></span> (или 4) + модификатор Телосложения (суммарно минимум 1) за каждый уровень волшебника после первого</p>
<br/><h4 class="smallSectionTitle" style="">ВЛАДЕНИЕ</h4><p style=""><strong>Доспехи: </strong>Нет</p>
<p style=""><strong style="">Оружие: </strong><a href="https://dnd.su/articles/inventory/96-arms/#weapon.dagger" style="" target="_blank">Кинжалы</a>, <a href="https://dnd.su/articles/inventory/96-arms/#weapon.dart" style="" target="_blank">дротики</a>, <a href="https://dnd.su/articles/inventory/96-arms/#weapon.sling" style="" target="_blank">пращи</a>, <span class="additionalAbility">боевые посохи</span>, <span class="additionalAbility">лёгкие арбалеты</span></p>
<p style=""><strong>Инструменты:</strong> Нет</p>
<p style=""><strong>Спасброски: </strong>Интеллект, Мудрость</p>
<p style=""><strong>Навыки:</strong> Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.history">История</span>, <span class="tooltipstered tooltip" tooltip-for="skill.arcana">Магия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.medicine">Медицина</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.investigation">Расследование</span>, <span class="tooltipstered tooltip" tooltip-for="skill.religion">Религия</span></p>
<br/><h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4><p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">боевой посох</span> или б) <span class="additionalAbility">кинжал</span></li>
<li style="">а) <span class="additionalAbility">мешочек с компонентами</span> или б) <span class="additionalAbility">магическая фокусировка</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.scholar">набор учёного</span> или б) <span class="tooltipstered tooltip" style="" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li><a href="https://dnd.su/articles/inventory/98-equipment/#spellbook" style="" target="_blank">Книга заклинаний</a></li>
</ul>
<p style="">Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>4к4 × 10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "использование заклинаний": `
<h3 class="underlined"><span id="feature.spellcasting">Использование заклинаний</span></h3>
<p><em style="">1-й уровень, умение волшебника</em></p>
<p style="">Являясь учеником тайной магии, вы обладаете книгой, содержащей заклинания, показывающие первые проблески вашей истинной силы. Вы найдёте список заклинаний, доступных волшебнику в этом разделе: <a href="/spells/?search=&amp;class=21" style="">заклинания волшебника</a>. Так же правила по использованию заклинаний есть в этой статье: <a href="/articles/mechanics/157-spellcasting/"><strong style=""><em> использование заклинаний</em></strong></a>.</p>
<h4 class="smallSectionTitle" style="">Заговоры (заклинания 0-го уровня)</h4><p style="">На 1-м уровне вы знаете три <a href="/spells/?search=&amp;level=0&amp;class=21" style="">заговора</a> на ваш выбор из списка заклинаний волшебника. Вы узнаёте дополнительные заговоры волшебника на более высоких уровнях, как показано в колонке «Известные заговоры».</p>
<h4 class="smallSectionTitle" style="">Книга заклинаний</h4><p style="">На 1-м уровне у вас есть книга заклинаний, содержащая шесть заклинаний волшебника 1-го уровня по вашему выбору. Ваша книга заклинаний является хранилищем известных вам заклинаний волшебника, за исключением заговоров, которые вы всегда помните.</p>
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head" style="">ВАША КНИГА ЗАКЛИНАНИЙ</h3>
	<p style="" class="spoiler_body">Заклинания, которые вы добавляете в свою книгу заклинаний, получая уровни, отражают исследования, которые вы проводите, а также интеллектуальные прорывы в изучении природы вселенной, сделанные вами. Вы также можете найти другие заклинания во время приключений. Вы можете обнаружить заклинание, записанное на свитке в сундуке злого волшебника, или, например, в пыльном фолианте в древней библиотеке.</p>
<p style=""><strong><em style="">Копирование заклинания в книгу.</em></strong> Если вы находите заклинание волшебника 1-го или более высокого уровня, вы можете добавить его в свою книгу заклинаний, если оно имеет такой уровень, заклинания которого вы можете подготавливать, и у вас имеется свободное время для его расшифровки и копирования.</p>
<p style="">Копирование заклинания в вашу книгу включает воспроизведение основной формы заклинания, а также расшифровку уникальной системы обозначений, используемой волшебником, который записал его. Вы должны подобрать нужные жесты и звуки, после чего записываете его в свою книгу заклинаний, используя собственные обозначения.</p>
<p style="">За каждый уровень заклинания процесс занимает 2 часа и стоит 50 золотых монет. Стоимость представляет собой материальные компоненты, которые вы расходуете на эксперименты с заклинанием, чтобы им овладеть, а также высококачественные чернила для записи текста. После того как вы потратили время и деньги, вы можете подготавливать это заклинание как и свои прочие заклинания.</p><p style=""><strong>Копирование заклинания со свитка заклинания (DMG).&nbsp;</strong>Если <a href="/items/210-spell_scroll/" target="_blank">свиток заклинания [spell scroll]</a> содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается.</p>
<p style=""><strong><em>Замена книги.</em></strong> Вы можете копировать заклинание из своей книги заклинаний в другую, например, если хотите сделать запасную копию. Это делается так же как и простое копирование заклинаний, но быстрее и проще, так как вы понимаете свои собственные обозначения и уже знаете, как творить это заклинание. Вам необходимо потратить только по 10 золотых монет и 1 часу для каждого уровня копируемого заклинания.</p>
<p style="">Если вы потеряли свою книгу заклинаний, вы можете использовать ту же процедуру для записи заклинаний, которые у вас подготовлены, в новую книгу заклинаний. Для заполнения оставшейся части книги заклинаний потребует найти новые заклинания, чтобы вернуть всё как прежде. По этой причине многие волшебники держат запасные книги заклинаний в безопасном месте.</p>
<p style=""><strong><em>Внешний вид книги.</em></strong> Ваша книга заклинаний является уникальным сборником заклинаний, со своими декоративными завитушками и ремарками. Это может быть обычная, обтянутая кожей книга, которую вы получили в подарок от наставника, или оплетённый золотом том, который вы нашли в древней библиотеке, или даже разрозненная коллекция записей, собранная вместе после потери предыдущей книги заклинаний в результате несчастного случая.</p>
</div>
<h4 class="smallSectionTitle">Подготовка и накладывание заклинаний</h4><p>Таблица «Волшебник» показывает, какое количество ячеек для накладывания заклинаний волшебника у вас есть на первом и более высоких уровнях. Для накладывания одного из этих заклинаний вы должны потратить ячейку заклинаний того же уровня или выше, что и само заклинание. Вы восстановите все потраченные ячейки, когда завершите продолжительный отдых.</p>
<p>Вы подготавливаете список заклинаний волшебника, доступных для накладывания. При этом вы выбираете&nbsp;<strong>число заклинаний волшебника из своей книги заклинаний, равное модификатору Интеллекта + уровень волшебника (минимум одно заклинание)</strong>. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний. Например, если вы волшебник 3-го уровня, то у вас есть четыре ячейки заклинаний 1-го уровня и две ячейки 2-го уровня. При Интеллекте 16 ваш список подготовленных заклинаний может включать в себя шесть заклинаний 1-го или 2-го уровня в любой комбинации, выбранных из вашей книги заклинаний. Если вы подготовили заклинание 1-го уровня <a href="/spells/27-magic_missile/">волшебная стрела [magic missile]</a>, вы можете наложить его, используя ячейку 1-го уровня или ячейку 2-го уровня. Накладывание заклинания не удаляет его из списка подготовленных заклинаний.</p>
<p>Вы можете изменить список подготовленных заклинаний, когда заканчиваете продолжительный отдых. Подготовка нового списка заклинаний волшебника требует времени, проведённого в изучении книги заклинаний и запоминания слов и жестов, которые вы должны совершить, чтобы наложить заклинание: не менее 1 минуты за уровень заклинания для каждого заклинания в вашем списке.</p>
<h4 class="smallSectionTitle">Базовая характеристика заклинаний</h4><p>При создании заклинаний волшебник использует Интеллект, так как вы узнаёте свои заклинания специальными исследованиями и запоминанием. Вы используете Интеллект в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете модификатор Интеллекта при определении Сл спасбросков от ваших заклинаний волшебника, и при броске атаки заклинаниями.</p>
<p style="text-align: center; "><strong>Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Интеллекта</p>
<p style="text-align: center;"><strong>Модификатор броска атаки</strong> = ваш бонус мастерства + ваш модификатор Интеллекта</p>
<h4 class="smallSectionTitle">Ритуальное колдовство</h4><p>Вы можете сотворить заклинание волшебника как <a href="https://dnd.su/spells/?search=&amp;ritual=2" target="_blank">ритуал</a><a href="https://dnd.su/spells/?search=&amp;ritual=2" target="_blank"></a>, если у этого заклинания есть ключевое слово «ритуал», и оно есть в вашей книге заклинаний. Вам не нужно иметь это заклинание подготовленным.</p>
<h4 class="smallSectionTitle">Фокусировка заклинания</h4><p>Вы можете использовать магическую фокусировку в качестве заклинательной фокусировки для заклинаний волшебника.</p>
<h4 class="smallSectionTitle">Известные заклинания первого и более высоких уровней</h4><p>Каждый раз, когда вы получаете уровень волшебника, вы можете добавить два заклинания волшебника по вашему выбору в книгу заклинаний. Уровень этих заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний. Во время приключений вы можете найти другие заклинания, которые сможете добавить в книгу заклинаний.</p>
<div class="TCE-feature-on">
<br>
`,
    "дополнительные заклинания волшебника": `
<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания волшебника</span></h3>
<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение волшебника</em></p>
<p>Заклинания из представленного ниже списка расширяют ваш список заклинаний волшебника представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа. Школа магии заклинания обозначена в скобках, а если заклинание может быть исполнено как ритуал, то в скобках также будет указано «ритуал».</p>
<br><div class="table-wrapper"><table><tbody>
<tr class="table_header"><td>Уровень<br>заклинания</td><td>Заклинания</td></tr>
<tr><td>Заговор</td><td><a href="/spells/458-booming_blade/">громовой клинок [booming blade]</a>&nbsp;(воплощ.), <a href="/spells/459-green_flame_blade/">клинок зеленого пламени [green-flame blade]</a>&nbsp;(воплощ.), <a href="/spells/460-lightning_lure/">лассо молнии [lightning lure]</a>&nbsp;(воплощ.), <a href="/spells/3050-mind_sliver/">расщепление разума [mind sliver]</a>&nbsp;(очар.), <a href="/spells/461-sword_burst/">вспышка мечей [sword burst]</a>&nbsp;(выз.) </td></tr>
<tr><td>1</td><td><a href="/spells/3047-tasha_s_caustic_brew/">едкое варево Таши [Tasha’s caustic brew]</a>&nbsp;(воплощ.) </td></tr>
<tr><td>2</td><td><a href="/spells/40-augury/">гадание [augury]</a> (прориц., ритуал), <a href="/spells/3053-tasha_s_mind_whip/">психическая плеть Таши [Tasha’s mind whip]</a>&nbsp;(очаров.), <a href="/spells/103-enhance_ability/">улучшение характеристики [enhance ability]</a> (преобр.)</td></tr>
<tr><td>3</td><td><a href="/spells/3049-intellect_fortress/">крепость интеллекта [intellect fortress]</a>&nbsp;(огражд.), <a href="/spells/3051-spirit_shroud/">покров духа [spirit shroud]</a>&nbsp;(некр.), <a href="/spells/3067-summon_undead/">призыв духа нежити [summon undead]</a>&nbsp;(некр.), <a href="/spells/3069-summon_shadowspawn/">призыв духа тени [summon shadowspawn]</a>&nbsp;(выз.), <a href="/spells/3070-summon_fey/">призыв духа феи [summon fey]</a>&nbsp;(выз.), <a href="/spells/293-speak_with_dead/">разговор с мёртвыми [speak with dead]</a> (некр.) </td></tr>
<tr><td>4</td><td><a href="/spells/266-divination/">предсказание [divination]</a> (прориц., ритуал), <a href="/spells/3062-summon_aberration/">призыв духа аберрации [summon abberation]</a>&nbsp;(выз.), <a href="/spells/3065-summon_construct/">призыв духа конструкта [summon construct]</a>&nbsp;(выз.), <a href="/spells/3068-summon_elemental/">призыв духа элементаля [summon elemental]</a>&nbsp;(выз.) </td></tr>
<tr><td>6</td><td><a href="/spells/3052-tasha_s_otherworldly_guise/">потусторонний облик Таши [Tasha’s otherworldly guise]</a>&nbsp;(преобр.), <a href="/spells/3064-summon_fiend/" target="_blank">призыв духа исчадия [summon fiend]</a><a href="/spells/3064-summon_fiend/"></a>&nbsp;(выз.) </td></tr>
<tr><td>7</td><td><a href="/spells/3054-dream_of_the_blue_veil/">сон синей вуали [dream of the blue veil]</a>&nbsp;(выз.) </td></tr>
<tr><td>9</td><td><a href="/spells/3048-blade_of_disaster/">клинок разрушения [blade of disaster]</a>&nbsp;(выз.) </td></tr>
</tbody></table></div>
</div>
<br>
`,
    "магическое восстановление": `
<h3 class="underlined"><span id="feature.arcane-recovery">МАГИЧЕСКОЕ ВОССТАНОВЛЕНИЕ</span></h3>
<p><em>1-й уровень, умение волшебника</em></p>
<p>Вы знаете как восстанавливать часть магической энергии, изучая книгу заклинаний. Один раз в день, когда вы заканчиваете короткий отдых, вы можете восстановить часть использованных ячеек заклинаний. Ячейки заклинаний могут иметь суммарный уровень, который не превышает половину уровня вашего волшебника (округляя в большую сторону), и ни одна из ячеек не может быть шестого уровня или выше.</p>
<p>Например, если вы волшебник 4-го уровня, вы можете восстановить ячейки заклинаний с суммой уровней не больше двух. Вы можете восстановить одну ячейку заклинаний 2-го уровня, или две ячейки заклинаний 1-го уровня.</p>
<br>
`,
    "магические традиции": `
<h3 class="underlined"><span id="feature.arcane-tradition">МАГИЧЕСКИЕ ТРАДИЦИИ</span></h3>
<p><em>2-й уровень, умение волшебника</em></p>
<p>Вы выбираете магическую традицию, определяющую вашу магическую практику. Подробнее обо всех традициях можно прочесть в конце описания класса.</p>
<p>Ваш выбор даёт вам умения на 2-м, 6-м, 10-м и 14-м уровнях.</p>
<div class="TCE-feature-on">
<br>
`,
    "формулы заговоров": `
<h3 class="underlined"><span id="feature.cantrip-formulas">Формулы заговоров</span></h3>
<p><em>3-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение волшебника</em></p>
<p>Вы записали в свою книгу заклинаний набор тайных формул, которые вы можете использовать, чтобы сформулировать заговор в уме. Каждый раз, когда вы заканчиваете продолжительный отдых, вы можете свериться с этими формулами в своей книге заклинаний и заменить один известный вам заговор волшебника на другой заговор из списка заклинаний волшебника.</p>
</div>
<br>
`,
    "увеличение характеристик": `
<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
<p><em>4-й уровень, умение волшебника</em></p>
<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
<br>
`,
    "мастерство заклинателя": `
<h3 class="underlined"><span id="feature.spell-mastery">МАСТЕРСТВО ЗАКЛИНАТЕЛЯ</span></h3>
<p><em>18-й уровень, умение волшебника</em></p>
<p>Вы достигаете такого мастерства в отношении некоторых заклинаний, что можете накладывать их неограниченное количество раз. Выберите одно заклинание волшебника 1-го уровня и одно заклинание волшебника 2-го уровня, которые есть в вашей книге заклинаний. Вы можете накладывать эти заклинания без увеличения их уровня, не тратя ячейки заклинаний, при условии, что вы их подготовили. Если вы хотите увеличить уровень этих заклинаний, вы должны потратить ячейку заклинаний как обычно.</p>
<p>Потратив 8 часов на обучение, вы можете изменить одно или оба эти заклинания по своему усмотрению на заклинания тех же уровней.</p>
<br>
`,
    "фирменное заклинание": `
<h3 class="underlined"><span id="feature.signature-spells">ФИРМЕННОЕ ЗАКЛИНАНИЕ</span></h3>
<p><em>20-й уровень, умение волшебника</em></p>
<p>Вы получаете власть над двумя мощными заклинаниями и можете накладывать их без усилий. Выберите два заклинания волшебника 3-го уровня из своей книги заклинаний в качестве фирменных заклинаний. Для вас эти заклинания всегда считаются подготовленными, они не учитываются в количестве подготовленных заклинаний, и вы можете наложить каждое из этих заклинаний 3-го уровня, не тратя ячейку заклинаний. Когда вы так поступаете, вы не можете наложить их повторно таким же образом, пока не закончите короткий или продолжительный отдых.</p>
<p>Если вы хотите наложить заклинание более высокого уровня, вы должны потратить ячейку заклинаний как обычно.</p>
`,
  },
};
module.exports = details;
