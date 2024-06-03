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
<td><span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Божественный домен</span></td>
<td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>2</td><td>+2</td>
<td><a href="#feature.channel-divinity">Божественный канал (1/отдых)</a>, <span class="tableAbility">Умение божественного домена</span>, <span class="tableAbility">Праведное восстановление</span></td>
<td>3</td><td>3</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>3</td><td>+2</td>
<td>—</td>
<td>3</td><td>4</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Универсальность заговоров</span></td>
<td>4</td><td>4</td><td>3</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>5</td><td>+3</td>
<td><a href="#feature.destroy-undead">Уничтожение Нежити (ПО ½)</a></td>
<td>4</td><td>4</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td style="">6</td><td style="">+3</td>
<td><a href="#feature.channel-divinity" style="">Божественный канал (2/отдых)</a>, <span class="tableAbility">Умение божественного домена</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>7</td><td>+3</td>
<td>—</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>8</td><td>+3</td>
<td><span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Уничтожение Нежити (ПО 1)</span>, <span class="TCE-feature-off" style="display: none;"><span class="tableAbility">Умение божественного домена</span></span><span class="tableAbility">Благословленные удары</span></td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>9</td><td>+4</td>
<td>—</td>
<td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td style="">10</td><td style="">+4</td>
<td><a href="#feature.divine-intervention" style="">Божественное вмешательство</a></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>11</td><td>+4</td>
<td><span class="tableAbility">Уничтожение Нежити (ПО 2)</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>12</td><td>+4</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>13</td><td>+5</td>
<td>—</td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>—</td><td>—</td></tr>
<tr><td>14</td><td>+5</td>
<td><span class="tableAbility">Уничтожение Нежити (ПО 3)</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>—</td><td>—</td></tr>
<tr><td>15</td><td>+5</td>
<td>—</td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>—</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>—</td></tr>
<tr><td>17</td><td>+6</td>
<td><span class="tableAbility">Уничтожение Нежити (ПО 4)</span>, <span class="tableAbility">Умение божественного домена</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>18</td><td>+6</td>
<td><a href="#feature.channel-divinity">Божественный канал (3/отдых)</a></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Улучшение божественного вмешательства</span></td>
<td>5</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
</tbody>
</table>
`,
  additionalInfo: `
<div bis_skin_checked="1" class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение<span class="spoiler_head_button">свернуть</span></h3><span class="spoiler_body">
<h4 class="tableTitle">ХИТЫ</h4><p><strong>Кость Хитов:</strong> <span class="dice"><span>1к8</span><span></span></span> за каждый уровень жреца</p>
<p><strong>Хиты на 1 уровне:</strong> 8 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к8</span><span></span></span> (или 5) + модификатор Телосложения (суммарно минимум 1) за каждый уровень жреца после первого</p>
<br/><h4 class="tableTitle">ВЛАДЕНИЕ</h4><p><strong>Доспехи:</strong> <span class="additionalAbility">Лёгкие доспехи</span>, <span class="additionalAbility">средние доспехи</span>, <span class="additionalAbility">щиты</span></p>
<p><strong>Оружие: </strong><span class="additionalAbility">Простое оружие</span></p>
<p><strong>Инструменты: </strong>Нет</p>
<p><strong>Спасброски: </strong>Мудрость, Харизма</p>
<p><strong>Навыки:</strong> Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.history">История</span>, <span class="tooltipstered tooltip" tooltip-for="skill.medicine">Медицина</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.religion">Религия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.persuasion">Убеждение</span></p>
<br/><h4 class="tableTitle">СНАРЯЖЕНИЕ</h4><p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">булава</span> или б) <span class="additionalAbility">боевой молот</span> (если владеете)</li>
<li>а) <span class="additionalAbility">чешуйчатый доспех</span>, б) <span class="additionalAbility">кожаный доспех</span> или в) <span class="additionalAbility">кольчуга</span> (если владеете)</li>
<li>а) <span class="additionalAbility">лёгкий арбалет</span> и <a href="https://dnd.su/articles/inventory/98-equipment/#equipment.arrow" target="_blank">20 болтов</a> или б) любое <span class="additionalAbility">простое оружие</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.priest">набор священника</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li><span class="additionalAbility">Щит</span> и <span class="additionalAbility">священный символ</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>5к4×10</span><span></span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "использование заклинаний": `
<h3 class="underlined"><span id="feature.spellcasting">Использование заклинаний</span></h3><p><em>1-й уровень, умение жреца</em></p>
<p>Будучи проводником божественной силы, вы можете накладывать заклинания жреца. Вы найдёте список заклинаний, доступных жрецу в этом разделе: <a href="/spells/?search=&amp;level=&amp;school=&amp;class=13&amp;concentration=&amp;source=102%7C107%7C108%7C109%7C112%7C114%7C115%7C116%7C117%7C118" target="_blank">заклинания жреца</a>. Так же правила по использованию заклинаний есть в этой статье: <a href="/articles/mechanics/157-spellcasting/"><strong style=""><em> использование заклинаний</em></strong></a>.</p>
<h4 class="smallSectionTitle">Заговоры (заклинания 0-го уровня)</h4><p>На 1-м уровне вы знаете три <a href="/spells/?search=&amp;level=0&amp;school=&amp;class=13&amp;concentration=&amp;source=" target="_blank">заговора</a> на свой выбор из списка заклинаний жреца. Вы узнаёте дополнительные заговоры жреца на более высоких уровнях, как показано в колонке «Известные заговоры».</p>
<h4 class="smallSectionTitle">Подготовка и сотворение заклинаний</h4><p>Таблица «Жрец» показывает, какое количество ячеек для накладывания заклинаний жреца у вас есть на первом и более высоких уровнях. Для накладывания одного из этих заклинаний вы должны потратить ячейку заклинаний того же уровня или выше, что и само заклинание. Вы восстановите все потраченные ячейки, когда закончите продолжительный отдых.</p>
<p>Вы подготавливаете список заклинаний жреца, доступных для накладывания. При этом вы выбираете <strong>количество заклинаний жреца, равное модификатору Мудрости + уровень жреца (минимум одно заклинание)</strong>. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний.</p>
<p>Например, если вы жрец 3-го уровня, то у вас есть четыре ячейки заклинаний 1-го уровня и две ячейки 2-го уровня. При Мудрости 16 ваш список подготовленных заклинаний может включать в себя шесть заклинаний 1-го или 2-го уровня в любой комбинации. Если вы подготовили заклинание 1-го уровня <a href="/spells/145-cure_wounds/" target="_blank">лечение ран [cure wounds]</a>, вы можете наложить его, используя ячейку 1-го уровня или ячейку 2-го уровня. Накладывание заклинания не удаляет его из списка подготовленных заклинаний.</p>
<p>Вы можете изменить список подготовленных заклинаний, когда заканчиваете продолжительный отдых. Подготовка нового списка заклинаний жреца требует времени, проведённого в молитвах и медитации: не менее 1 минуты за уровень заклинания для каждого заклинания в вашем списке.</p>
<h4 class="smallSectionTitle">Базовая характеристика заклинаний</h4><p>При накладывании заклинаний жрец использует Мудрость. Сила ваших заклинаний исходит от вашей преданности своему божеству. Вы используете Мудрость в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете модификатор Мудрости при определении Сл спасбросков от ваших заклинаний жреца, и при броске атаки заклинаниями.</p>
<p style="text-align: center;"><strong>Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Мудрости</p>
<p style="text-align: center;"><strong>Модификатор броска атаки</strong> = ваш бонус мастерства + ваш модификатор Мудрости</p>
<h4 class="smallSectionTitle">Ритуальное колдовство</h4><p>Вы можете сотворить заклинание жреца как ритуал, если у этого заклинания есть ключевое слово «ритуал», и оно подготовлено вами.</p>
<h4 class="smallSectionTitle">Фокусировка заклинания</h4><p>Вы можете использовать священный символ в качестве заклинательной фокусировки для заклинаний жреца.</p>
<div class="TCE-feature-on" bis_skin_checked="1">
<br>`,
    "дополнительные заклинания жреца": `
<h3 class="underlined">Дополнительные заклинания жреца</h3>
<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение жреца</em></p>
<p>Заклинания из представленного списка расширяют ваш список заклинаний жреца, представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа. Если заклинание может быть наложено как ритуал, то в скобках также будет указано «ритуал».</p>
<br>
<div class="table-wrapper"><table><tbody>
<tr class="table_header"><td style="text-align: center;">Уровень<br>заклинания</td><td>Заклинания</td></tr>
<tr><td style="text-align: center;">3</td><td><a href="/spells/3-aura_of_vitality/" target="_blank">аура живучести [aura of vitality]</a>, <a href="/spells/3051-spirit_shroud/" target="_blank">покров духа [spirit shroud]</a></td></tr>
<tr><td style="text-align: center;">4</td><td><a href="/spells/4-aura_of_life/" target="_blank">аура жизни [aura of life]</a>, <a href="/spells/5-aura_of_purity/" target="_blank">аура очищения [aura of purity]</a></td></tr>
<tr><td style="text-align: center;">5</td><td><a href="/spells/3066-summon_celestial/" target="_blank">призыв духа небожителя [summon celestial]</a></td></tr>
<tr><td style="text-align: center;">6</td><td><a href="/spells/329-sunbeam/" target="_blank">солнечный луч [sunbeam]</a></td></tr>
<tr><td style="text-align: center;">8</td><td><a href="/spells/330-sunburst/" target="_blank">солнечный ожог [sunburst]</a></td></tr>
<tr><td style="text-align: center;">9</td><td><a href="/spells/320-power_word_heal/" target="_blank">слово силы: исцеление [power word heal]</a></td></tr>
</tbody></table></div>
</div>
<br>`,
    "божественный домен": `
<h3 class="underlined"><span id="feature.divine-domain">БОЖЕСТВЕННЫЙ ДОМЕН</span></h3><p><em>1-й уровень, умение жреца</em></p>
<p>Выберите один домен, связанный с вашим божеством. Все домены детально рассмотрены в конце описания класса, и каждый содержит примеры божеств, связанных с ним. Ваш выбор даёт вам заклинания домена и другие умения. Он также даёт вам дополнительные способы использования «Божественного канала», когда вы получаете это умение на 2-м уровне, и дополнительные умения на 6-м, 8-м и 17-м уровнях.</p>
<h4 class="smallSectionTitle">ЗАКЛИНАНИЯ ДОМЕНА</h4><p>У каждого домена есть список заклинаний, которые вы получаете на новых уровнях жреца. Как только вы получаете заклинание домена, оно всегда считается подготовленным и не учитывается при подсчёте количества заклинаний, которые можно подготовить.</p>
<p>Если вы получаете доступ к заклинанию, отсутствующему в списке заклинаний жреца, оно всё равно будет считаться для вас заклинанием жреца.</p>
<br>`,
    "божественный канал": `
<h3 class="underlined"><span id="feature.channel-divinity">БОЖЕСТВЕННЫЙ КАНАЛ</span></h3><p><em>2-й уровень, умение жреца</em></p>
<p>Вы получаете возможность направлять божественную энергию непосредственно от своего божества, используя её для подпитки магических эффектов. Вы начинаете с двумя такими эффектами: «Изгнание Нежити» и эффектом, определяемым вашим доменом. Некоторые домены дают вам дополнительные эффекты, как только вы получите новые уровни.</p>
<p>Когда вы используете «Божественный канал», вы выбираете, какой эффект создать. Затем вы должны окончить короткий или продолжительный отдых, чтобы использовать «Божественный канал» снова. Некоторые эффекты «Божественного канала» требуют совершить спасбросок. Когда вы используете эффекты такого рода, Сл равна Сл спасброска от ваших заклинаний жреца.</p>
<p>Начиная с 6-го уровня вы можете использовать <em></em>«Божественный канал» <em></em>дважды перед отдыхом, а начиная с 18-го уровня вы можете использовать его три раза перед отдыхом: по окончании короткого или продолжительного отдыха вы восстановите все потраченные использования.</p>
<h4 class="smallSectionTitle">БОЖЕСТВЕННЫЙ КАНАЛ: ИЗГНАНИЕ НЕЖИТИ</h4><p>Вы действием демонстрируете свой священный символ и читаете молитву, изгоняющую Нежить. Вся Нежить, которая может видеть или слышать вас в пределах 30 футов, должна совершить спасбросок Мудрости. Если существо провалило спасбросок, оно изгоняется на 1 минуту, или пока не получит урон. Изгнанное существо должно тратить свои ходы, пытаясь уйти от вас как можно дальше, и не может добровольно переместиться в пространство, находящееся в пределах 30 футов от вас. Оно также не может совершать реакции. Действием существо может использовать только Рывок или пытаться освободиться от эффекта, препятствующего его передвижению. Если двигаться некуда, существо может использовать действие Уклонение.</p>
<div class="TCE-feature-on" bis_skin_checked="1">
<br>`,
    "праведное восстановление": `
<h3 class="underlined"><span id="feature.harness-divine-power">Праведное восстановление</span></h3>
<p><em>2-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение жреца</em></p>
<p>Вы можете использовать «Божественный канал», чтобы подпитать свои заклинания. Бонусным действием вы касаетесь своего священного символа, произносите молитву и возвращаете одну потраченную ячейку заклинаний, уровень которой не превышает половины вашего бонуса мастерства (с округлением в большую сторону). Вы можете использовать это умение количество раз, зависящее от уровня в этом классе: один раз на 2-м уровне, два раза на 6-м уровне, три раза на 18-м уровне. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.</p>
</div>
<br>`,
    "увеличение характеристик": `
<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3><p><em>4-й уровень, умение жреца</em></p>
<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
<div class="TCE-feature-on" bis_skin_checked="1">
<br>`,
    "универсальность заговоров": `
<h3 class="underlined"><span id="feature.cantrip-versatility">Универсальность заговоров</span></h3>
<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение жреца</em></p>
<p>Каждый раз, когда вы достигаете определённого уровня в этом классе и получаете умение «Увеличение характеристик», вы можете заменить один заговор, полученный 
умением «Использование заклинаний» этого класса, на другой заговор из списка заклинаний жреца.</p>
</div>
<br>`,
    "уничтожение нежити": `
<h3 class="underlined"><span id="feature.destroy-undead">УНИЧТОЖЕНИЕ НЕЖИТИ</span></h3><p><em>5-й уровень, умение жреца</em></p>
<p>Когда Нежить проваливает спасбросок от вашего умения «Изгнание Нежити», существо мгновенно уничтожается, если его показатель опасности не превышает значения, указанного в таблице:</p>
<div class="table-wrapper"><table><tbody>
<tr class="table_header"><td style="text-align: center;">Уровень жреца</td><td>Уничтожается Нежить с ПО...</td></tr>
<tr><td style="text-align: center;">5</td><td>1/2 или ниже</td></tr>
<tr><td style="text-align: center;">8</td><td>1 или ниже</td></tr>
<tr><td style="text-align: center;">11</td><td>2 или ниже</td></tr>
<tr><td style="text-align: center;">14</td><td>3 или ниже</td></tr>
<tr><td style="text-align: center;">17</td><td>4 или ниже</td></tr>
</tbody></table></div>
<div class="TCE-feature-on" bis_skin_checked="1">
<br>`,
    "благословлённые удары": `
<h3 class="underlined"><span id="feature.blessed-strikes">Благословлённые удары</span></h3>
<p><em>8-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение жреца, заменяющее умения «Божественный удар» или «Могущественное колдовство» </em></p>
<p>Вы благословлены божественной мощью в битве. Когда существо получает урон от вашего заговора или атаки оружием, вы можете дополнительно нанести <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span><span></span></span> урона излучением. Как только вы нанесёте этот урон, вы не сможете использовать это умение снова до начала вашего следующего хода.</p>
</div>
<br>`,
    "божественное вмешательство": `
<h3 class="underlined"><span id="feature.divine-intervention">БОЖЕСТВЕННОЕ ВМЕШАТЕЛЬСТВО</span></h3><p><em>10-й уровень, умение жреца</em></p>
<p>Вы можете воззвать к своему божеству о помощи, когда сильно в этом нуждаетесь. Мольба о помощи совершается действием. Опишите помощь, которую вы ждёте, и киньте процентную кость. Если выпадет число, не превышающее ваш уровень жреца, ваше божество вмешается. Мастер сам выбирает природу вмешательства; подойдёт эффект какого-либо заклинания жреца или заклинания домена.</p>
<p>Если божество вмешивается, вы не можете использовать это умение в течение 7 дней. В противном случае вы можете использовать это умение после продолжительного отдыха. На 20-м уровне ваше воззвание автоматически успешно и не требует проверки.</p>
`,
  },
};
module.exports = details;
