const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header">
<td rowspan="2"><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td rowspan="2"><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td rowspan="2">Умения</td>
<td colspan="5"><span class="long">Ячейки заклинаний на уровень заклинаний</span><span class="short tooltip tooltipstered">ячейки</span></td>
</tr>
<tr class="table_header spell-slots-row"><td>1</td><td>2</td><td style="text-align: center;">3</td><td>4</td><td>5</td></tr>
<tr><td>1</td><td>+2</td>
<td><span class="tableAbility">Божественное чувство</span>, <span class="tableAbility">Наложение рук</span></td>
<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td>
<td><span class="tableAbility">Боевой стиль</span>, <span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Божественная кара</span><span class="TCE-feature-on" style="display: inline;">, <span class="tableAbility">Варианты боевых стилей</span>, <span class="tableAbility">Дополнительные заклинания</span></span></td>
<td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td>
<td><span class="tableAbility">Божественное здоровье</span>, <span class="tableAbility">Священная клятва</span><span class="TCE-feature-on" style="display: inline;">, <span class="tableAbility">Праведное восстановление</span></span></td>
<td>3</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on" style="display: inline;">, <span class="tableAbility">Универсальность воина</span></span></td>
<td>3</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td>
<td><span class="tableAbility">Дополнительная атака</span></td>
<td>4</td><td>2</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>6</td><td>+3</td>
<td><span class="tableAbility">Аура защиты</span></td>
<td>4</td><td>2</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>7</td><td>+3</td>
<td><span class="tableAbility">Умение священной клятвы</span></td>
<td>4</td><td>3</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>8</td><td>+3</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>3</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>9</td><td>+4</td>
<td>-</td>
<td>4</td><td>3</td><td>2</td><td>-</td><td>-</td></tr>
<tr><td>10</td><td>+4</td>
<td><span class="tableAbility">Аура отваги</span></td>
<td>4</td><td>3</td><td>2</td><td>-</td><td>-</td></tr>
<tr><td>11</td><td>+4</td>
<td><span class="tableAbility">Улучшенная божественная кара</span></td>
<td>4</td><td>3</td><td>3</td><td>-</td><td>-</td></tr>
<tr><td>12</td><td>+4</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>3</td><td>3</td><td>-</td><td>-</td></tr>
<tr><td>13</td><td>+5</td>
<td>-</td>
<td>4</td><td>3</td><td>3</td><td>1</td><td>-</td></tr>
<tr><td>14</td><td>+5</td>
<td><span class="tableAbility">Очищающее касание</span></td>
<td>4</td><td>3</td><td>3</td><td>1</td><td>-</td></tr>
<tr><td>15</td><td>+5</td>
<td><span class="tableAbility">Умение священной клятвы</span></td>
<td>4</td><td>3</td><td>3</td><td>2</td><td>-</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>3</td><td>3</td><td>2</td><td>-</td></tr>
<tr><td>17</td><td>+6</td>
<td>-</td>
<td>4</td><td>3</td><td>3</td><td>3</td><td>1</td></tr>
<tr><td>18</td><td>+6</td>
<td><span class="tableAbility">Улучшения ауры</span></td>
<td>4</td><td>3</td><td>3</td><td>3</td><td>1</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>3</td><td>3</td><td>3</td><td>2</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Умение священной клятвы</span></td>
<td>4</td><td>3</td><td>3</td><td>3</td><td>2</td></tr>
</tbody>
</table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ </h4><p><strong>Кость Хитов:</strong> <span class="dice"><span>1к10</span></span> за каждый уровень паладина</p>
<p><strong>Хиты на 1 уровне:</strong> 10 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях: </strong><span class="dice"><span>1к10</span></span> (или 6) + модификатор Телосложения (суммарно минимум 1) за каждый уровень паладина после первого</p>
<br/><h4 class="smallSectionTitle">ВЛАДЕНИЕ </h4><p><strong>Доспехи:</strong> <span class="additionalAbility">Все виды доспехов</span>, <span class="additionalAbility">щиты</span></p>
<p><strong>Оружие: </strong><span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">воинское оружие</span></p>
<p><strong>Инструменты:</strong> нет</p>
<p><strong>Спасброски:</strong> Мудрость, Харизма</p>
<p><strong>Навыки:</strong> Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.athletics">Атлетика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.intimidation">Запугивание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.medicine">Медицина</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.religion">Религия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.persuasion">Убеждение</span></p>
<br/><h4 class="smallSectionTitle">СНАРЯЖЕНИЕ </h4><p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">воинское оружие</span> и <span class="additionalAbility">щит</span> или б) два <span class="additionalAbility">воинских оружия</span></li>
<li>а) пять <span class="additionalAbility">метательных копий</span> или б) любое <span class="additionalAbility">простое рукопашное оружие</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.priest">набор священника</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li><span class="additionalAbility">Кольчуга</span> и <span class="additionalAbility">священный символ</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>5к4×10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "божественное чувство": `
	<h3 class="underlined"><span id="feature.divine-sense">БОЖЕСТВЕННОЕ ЧУВСТВО</span></h3><p><em>1-й уровень, умение паладина</em></p>
	<p>Присутствие сильного зла воспринимается вашими чувствами как неприятный запах, а могущественное добро звучит как небесная музыка в ваших ушах. Вы можете действием открыть своё сознание для обнаружения таких сил. Вы до конца своего следующего хода знаете местоположение всех Исчадий, Небожителей и Нежити в пределах 60 футов, не имеющих <span tooltip-for="cover.full" class="tooltipstered tooltip">полного укрытия</span>. Вы знаете вид (Исчадие, Небожитель, Нежить) любого существа, чьё присутствие вы чувствуете, но не можете определить, кто это конкретно (например, вампир граф Страд фон Зарович). В этом же радиусе вы также обнаруживаете присутствие мест и предметов, которые были освящены или осквернены, например, заклинанием <a href="/spells/310-hallow/" target="_blank">святилище [hallow]</a>.</p>
	<p>Вы можете использовать это умение количество раз, равное 1 + модификатор Харизмы. Когда вы заканчиваете продолжительный отдых, вы восстанавливаете все потраченные использования.</p>
	<br>`,
    "наложение рук": `
	<h3 class="underlined"><span id="feature.lay-on-hands">НАЛОЖЕНИЕ РУК</span></h3><p><em>1-й уровень, умение паладина</em></p>
	<p>Ваше благословенное касание может лечить раны. У вас есть запас целительной силы, который восстанавливается после продолжительного отдыха. При помощи этого запаса вы можете восстанавливать количество хитов, равное уровню паладина, умноженному на 5.</p>
	<p>Вы можете действием коснуться существа и, зачерпнув силу из запаса, восстановить количество хитов этого существа на любое число, вплоть до максимума, оставшегося в вашем запасе.</p>
	<p>В качестве альтернативы, вы можете потратить 5 хитов из вашего запаса хитов для излечения цели от одной болезни или одного действующего на неё яда. Вы можете устранить несколько эффектов болезни и ядов одним использованием «Наложения рук», тратя хиты отдельно для каждого эффекта.</p>
	<p>Это умение не оказывает никакого эффекта на Нежить и Конструктов.</p>
	<br>`,
    "боевой стиль": `
	<h3 class="underlined"><span id="feature.fighting-style">Боевой стиль</span></h3><p><em>2-й уровень, умение паладина</em></p>
	<p>Вы выбираете боевой стиль, соответствующий вашей специализации. Выберите один из следующих вариантов. Вы не можете выбирать один и тот же вариант боевого стиля, даже если позже у вас будет возможность выбрать еще один стиль.</p>
	<h4 class="smallSectionTitle">Дуэлянт</h4><p>Пока вы держите рукопашное оружие в одной руке, и не используете другого оружия, вы получаете бонус +2 к броскам урона этим оружием.</p>
	<h4 class="smallSectionTitle">Защита</h4><p>Если существо, которое вы видите, атакует не вас, а другое существо, находящееся в пределах 5 футов от вас, вы можете реакцией создать помеху его броску атаки. Для этого вы должны использовать щит.</p>
	<h4 class="smallSectionTitle">Оборона</h4><p>Пока вы носите доспехи, вы получаете бонус +1 к КД.</p>
	<h4 class="smallSectionTitle">Сражение большим оружием</h4><p>Если у вас выпало «1» или «2» на кости урона при атаке, которую вы совершали рукопашным оружием, удерживая его двумя руками, то вы можете перебросить эту кость, и должны использовать новый результат. Чтобы воспользоваться этим преимуществом, ваше оружие должно иметь свойство «<span tooltip-for="weapon.twohanded" class="tooltipstered tooltip">двуручное</span>» или «<span tooltip-for="weapon.versatile" class="tooltipstered tooltip">универсальное</span>».</p>
	<div class="TCE-feature-on" style="display: block;">
	<h4 class="smallSectionTitle"><span id="feature.TCE-fighting-styles">Благословенный воин</span></h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">Опциональный</span> вариант боевого стиля</em></p>
	<p>Вы узнаёте два <a href="/spells/?search=&amp;level=0&amp;class=13" target="_blank" style="font-style: normal;">заговора</a> по вашему выбору из списка заклинаний жреца. Для вас они считаются заклинаниями паладина, а базовой характеристикой для этих заклинаний является ваша Харизма. Каждый раз, когда вы получаете уровень в этом классе, вы можете заменить один из заговоров на другой из списка заклинаний жреца.</p>
	<h4 class="smallSectionTitle">Перехват</h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">Опциональный</span> вариант боевого стиля</em></p>
	<p>Когда существо, которое вы можете видеть, попадает атакой по цели в пределах 5 футов от вас (но не по вам), вы можете реакцией уменьшить урон, получаемый целью, на количество, равное <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к10</span></span> + ваш бонус мастерства (вплоть до 0 урона). Чтобы использовать эту реакцию, вы должны держать в руках щит либо простое или воинское оружие.</p>
	<h4 class="smallSectionTitle">Сражение вслепую</h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">Опциональный</span> вариант боевого стиля</em></p>
	<p>Вы получаете <span tooltip-for="vision.blindsight" class="tooltipstered tooltip">слепое зрение</span> в пределах 10 футов. В пределах этой дистанции вы можете видеть всё, что не находится за <span tooltip-for="cover.full" class="tooltipstered tooltip">полным укрытием</span>, даже если вы <span tooltip-for="condition.blinded" class="tooltipstered tooltip">ослеплены</span> или находитесь в <span tooltip-for="light.darkness" class="tooltipstered tooltip">темноте</span>. Более того, вы можете увидеть <span tooltip-for="condition.invisible" class="tooltipstered tooltip">невидимое</span> существо в пределах этой дистанции, если только оно не преуспело в попытке спрятаться от вас.</p>
	</div>
	
	<br>`,
    "использование заклинаний": `
	<h3 class="underlined"><span id="feature.spellcasting">Использование заклинаний</span></h3><p><em>2-й уровень, умение паладина</em></p>
	<p>Вы узнаёте, как черпать божественную магию посредством медитации и молитв, чтобы творить заклятья подобно жрецу. Вы найдёте список заклинаний, доступных паладину, в этом разделе: <a href="/spells/?search=&amp;class=16">заклинания паладина</a>. Так же правила по использованию заклинаний есть в этой статье: <a href="/articles/mechanics/157-spellcasting/"><em> использование заклинаний</em></a>.</p>
	<h4 class="smallSectionTitle">Подготовка и сотворение заклинаний</h4><p>Таблица «<a href="#paladin">Паладин</a>» демонстрирует, какое количество ячеек для накладывания заклинаний паладина у вас есть. Для накладывания одного из этих заклинаний вы должны потратить ячейку заклинаний того же уровня или выше, что и само заклинание. Вы восстановите все потраченные ячейки, когда завершите продолжительный отдых.</p>
	<p>Вы подготавливаете список заклинаний паладина, доступных для накладывания. При этом вы выбираете <strong>число заклинаний паладина из списка заклинаний паладина, равное модификатору Харизмы + половина уровня паладина, округляя в меньшую сторону (минимум одно заклинание)</strong>. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний. Например, если вы паладин 5-го уровня, то у вас есть четыре ячейки заклинаний 1-го уровня и две ячейки 2-го уровня. При Харизме 14 ваш список подготовленных заклинаний может включать в себя четыре заклинания 1-го или 2-го уровня, в любой комбинации. Если вы подготовили заклинание 1-го уровня <a href="/spells/145-cure_wounds/" target="_blank">лечение ран [cure wounds]</a>, вы можете наложить его, используя ячейку 1-го уровня или ячейку 2-го уровня. Накладывание заклинания не удаляет его из списка подготовленных заклинаний.</p>
	<p>Вы можете изменить список подготовленных заклинаний, когда завершаете продолжительный отдых. Подготовка нового списка заклинаний паладина требует времени, проведённого в молитвах и медитации: не менее 1 минуты за уровень заклинания для каждого заклинания в вашем списке.</p>
	<h4 class="smallSectionTitle">Базовая характеристика заклинаний</h4><p>Заклинания паладина накладываются с помощью Харизмы, так как их мощь проистекает из силы ваших убеждений. Вы используете Харизму в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете модификатор Харизмы при определении Сл спасбросков от ваших заклинаний паладина, и при броске атаки заклинаниями.</p>
	<p style="text-align:center;"><strong>Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Харизмы</p>
	<p style="text-align:center;"><strong>Модификатор броска атаки</strong> = ваш бонус мастерства + ваш модификатор Харизмы</p>
	<h4 class="smallSectionTitle">Фокусировка заклинания</h4><p>Вы можете использовать священный символ в качестве заклинательной фокусировки для заклинаний паладина.</p>
	<div class="TCE-feature-on" style="display: block;">
	<br>`,
    "дополнительные заклинания": `
	<h3 class="underlined"><span id="feature.TCE-spells">Дополнительные заклинания паладина</span></h3><p><em>2-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение паладина</em></p>
	<p>Заклинания из представленного ниже списка расширяют ваш список заклинаний паладина, представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа.&nbsp;</p>
	<br><div class="table-wrapper"><table><tbody>
	<tr class="table_header"><td>Уровень заклинания</td><td>Заклинания</td></tr>
	<tr><td>2</td><td><a href="/spells/186-gentle_repose/" target="_blank">нетленные останки [gentle repose]</a>, <a href="/spells/173-prayer_of_healing/" target="_blank">молебен лечения [prayer of healing]</a>, <a href="/spells/220-warding_bond/" target="_blank">охраняющая связь [wanding bond]</a></td></tr>
	<tr><td>3</td><td><a href="/spells/3051-spirit_shroud/" target="_blank">покров духа [spirit shroud]</a></td></tr>
	<tr><td>5</td><td><a href="/spells/3066-summon_celestial/" target="_blank">призыв духа небожителя [summon celestial]</a></td></tr>
	</tbody></table></div>
	</div>
	<br>`,
    "божественная кара": `
	<h3 class="underlined"><span id="feature.divine-smite">БОЖЕСТВЕННАЯ КАРА</span></h3><p><em>2-й уровень, умение паладина</em></p>
	<p>Если вы попадаете по существу рукопашной атакой оружием, вы можете потратить одну ячейку заклинания любого своего класса для причинения цели урона излучением, который добавится к урону от оружия. Дополнительный урон равен <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>2к8</span></span> за ячейку 1-го уровня, плюс <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span></span> за каждый уровень ячейки выше первого, до максимума <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>5к8</span></span>. Если цель — Нежить или Исчадие, урон увеличивается на <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span></span> с максимумом <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>6к8</span></span>.</p>
	<br>`,
    "божественное здоровье": `
	<h3 class="underlined"><span id="feature.divine-health">БОЖЕСТВЕННОЕ ЗДОРОВЬЕ</span></h3><p><em>3-й уровень, умение паладина</em></p>
	<p>Божественная магия, текущая через вас, даёт вам иммунитет к болезням.</p>
	<br>`,
    "священная клятва": `
	<h3 class="underlined"><span id="feature.sacred-oath">СВЯЩЕННАЯ КЛЯТВА</span></h3><p><em>3-й уровень, умение паладина</em></p>
	<p>Вы даёте клятву, навсегда связывающую вас как паладина. До этого момента вы были в подготовительной стадии, следуя по пути, но ещё не дав присягу. Все клятвы подробно рассмотрены <a href="#sacred-oaths">ниже</a>. Ваш выбор предоставляет вам умения на 3-м, 7-м, 15-м и 20-м уровнях. Эти умения включают в себя заклинания клятвы и умения «Божественного канала».</p>
	<h4 class="smallSectionTitle">ЗАКЛИНАНИЯ КЛЯТВЫ</h4><p>Каждая клятва имеет список связанных с ней заклинаний. Вы получаете доступ к этим заклинаниям на уровнях, указанных в описании клятвы. После того как вы получаете доступ к заклинанию клятвы, оно всегда у вас подготовлено. Заклинания клятвы не учитываются в количестве заклинаний, которые можно подготовить каждый день. Если вы получаете заклинание клятвы, которое не входит в список заклинаний паладина, это заклинание всё равно считается заклинанием паладина для вас.</p>
	<h4 class="smallSectionTitle"><span id="channel-divinity">БОЖЕСТВЕННЫЙ КАНАЛ</span></h4><p><em></em>Ваша клятва позволяет направлять божественную энергию, чтобы подпитывать магические эффекты. Каждый вариант «Божественного канала», предоставленный клятвой, объясняет, как его использовать.</p>
	<p><em></em><em></em>Когда вы используете ваш «Божественный канал», вы выбираете, какой эффект создать. Затем вы должны окончить короткий или продолжительный отдых, чтобы использовать «Божественный канал» снова.</p>
	<p>Некоторые эффекты «Божественного канала» требуют совершить спасбросок. Когда вы используете эффекты такого рода, Сл равна Сл спасброска от ваших заклинаний паладина.</p>
	<div class="TCE-feature-on" style="display: block;">
	<br>`,
    "праведное восстановление": `
	<h3 class="underlined"><span id="feature.harness-divine-power">Праведное восстановление</span></h3><p><em>3-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение паладина</em></p>
	<p>Вы можете использовать «<a href="#channel-divinity">Божественный канал</a>», чтобы подпитать свои заклинания. Бонусным действием вы касаетесь своего священного символа, произносите молитву и возвращаете одну потраченную ячейку заклинаний, уровень которой не превышает половины вашего бонуса мастерства (с округлением в большую сторону). Вы можете использовать это умение количество раз, зависящее от уровня в этом классе: один раз на 3-м уровне, два раза на 7-м уровне, три раза на 15-м уровне. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.</p>
	</div>
	<br>`,
    "увеличение характеристик": `
	<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3><p><em>4-й уровень, умение паладина</em></p>
	<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
	<div class="TCE-feature-on" style="display: block;">
	<br>`,
    "универсальность воина": `
	<h3 class="underlined"><span id="feature.martial-versatility">Универсальность воина</span></h3><p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение паладина</em></p>
	<p>Каждый раз, когда вы достигаете определённого уровня в этом классе, и получаете умение «<span class="tableAbility">Увеличение характеристик</span>», вы можете заменить известный вам боевой стиль на другой, доступный паладину. Эта замена отражает смену направления вашего развития в боевых практиках.</p>
	</div>
	<br>`,
    "дополнительная атака": `
	<h3 class="underlined"><span id="feature.extra-attack">ДОПОЛНИТЕЛЬНАЯ АТАКА</span></h3><p><em>5-й уровень, умение паладина</em></p>
	<p>Если вы в свой ход совершаете действие Атака, вы можете совершить две атаки вместо одной.</p>
	<br>`,
    "аура защиты": `
	<h3 class="underlined"><span id="feature.aura-of-protection">АУРА ЗАЩИТЫ</span></h3><p><em>6-й уровень, умение паладина</em></p>
	<p>Если вы или дружественное существо в пределах 10 футов от вас должны совершить спасбросок, это существо получает бонус к спасброску, равный модификатору вашей Харизмы (минимальный бонус +1). Вы должны находиться в сознании, чтобы предоставлять этот бонус. На 18-м уровне дистанция этой ауры увеличивается до 30 футов.</p>
	<br>`,
    "аура отваги": `
	<h3 class="underlined"><span id="feature.aura-of-courage">АУРА ОТВАГИ</span></h3><p><em>10-й уровень, умение паладина</em></p>
	<p>Вы и дружественные существа в пределах 10 футов от вас не можете быть <span tooltip-for="condition.frightened" class="tooltipstered tooltip">испуганы</span>, пока вы находитесь в сознании. На 18-м уровне дистанция этой ауры увеличивается до 30 футов.</p>
	<br>`,
    "улучшенная божественная кара": `
	<h3 class="underlined"><span id="feature.improved-divine-smite">УЛУЧШЕННАЯ БОЖЕСТВЕННАЯ КАРА</span></h3><p><em>11-й уровень, умение паладина</em></p>
	<p>Вы проникаетесь праведной мощью, что даёт всем вашим ударам рукопашным оружием божественную силу. Каждый раз, когда вы попадаете по существу рукопашным оружием, это существо получает дополнительные <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span></span> урона излучением.</p>
	<br>`,
    "очищающее касание": `
	<h3 class="underlined"><span id="feature.cleansing-touch">ОЧИЩАЮЩЕЕ КАСАНИЕ</span></h3><p><em>14-й уровень, умение паладина</em></p>
	<p>Вы можете действием окончить действие заклинания на себе или на одном согласном существе, которого вы касаетесь. Вы можете использовать это умение количество раз, равное вашему модификатору Харизмы (минимум 1). Вы восстанавливаете потраченные использования, когда завершаете продолжительный отдых.</p>
	`,
  },
};
module.exports = details;
