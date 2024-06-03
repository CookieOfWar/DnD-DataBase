const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header">
<td rowspan="2"><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td rowspan="2"><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td rowspan="2">Умения</td>
<td rowspan="2"><span class="long">Известные<br/>заклинания</span><span class="short tooltip tooltipstered">из</span></td>
<td colspan="5"><span class="long">Ячейки заклинаний на уровень заклинаний</span><span class="short tooltip tooltipstered">ячейки</span></td>
</tr>
<tr class="table_header spell-slots-row"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><td>1</td><td>+2</td>
<td><span class="tableAbility">Избранный враг</span>, <span class="tableAbility">Предпочтительный противник</span></span>, <span class="tableAbility">Исследователь природы</span><span class="TCE-feature-on">, <span class="tableAbility">Искусный исследователь</span></td>
<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td>
<td><span class="tableAbility">Боевой стиль</span>, <span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Заклинательная фокусировка</span>, <span class="tableAbility">Дополнительные заклинания</span></td>
<td>2</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td>
<td><span class="tableAbility">Архетип следопыта</span>, <span class="tableAbility">Первозданная осведомлённость</span>, <span class="tableAbility">Изначальная осведомлённость</span></td>
<td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Универсальность воина</span></td>
<td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td>
<td><span class="tableAbility">Дополнительная атака</span></td>
<td>4</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>6</td><td>+3</td>
<td>Улучшение <span class="tableAbility">избранного врага</span>, <span class="tableAbility">искусного исследователя</span> и <span class="tableAbility">исследователя природы</span></td>
<td>4</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>7</td><td>+3</td>
<td><span class="tableAbility">Умение архетипа следопыта</span></td>
<td>5</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td style="">8</td><td style="">+3</td>
<td><a href="#feature.ASI" style="">Увеличение характеристик</a>, <span class="tableAbility">Тропами земли</span></td>
<td>5</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td></tr>
<tr style=""><td style="">9</td><td style="">+4</td>
<td style="">-</td>
<td style="">6</td><td style="">4</td><td style="">3</td><td style="">2</td><td style="">-</td><td style="">-</td></tr>
<tr style=""><td style="">10</td><td style="">+4</td>
<td style="">Улучшение <span class="tableAbility">исследователя природы</span>, <span class="tableAbility">Маскировка на виду</span>, <span class="tableAbility">Природная завеса</span></td>
<td style="">6</td><td style="">4</td><td style="">3</td><td style="">2</td><td style="">-</td><td style="">-</td></tr>
<tr><td>11</td><td>+4</td>
<td><span class="tableAbility">Умение архетипа следопыта</span></td>
<td>7</td><td>4</td><td>3</td><td>3</td><td>-</td><td>-</td></tr>
<tr><td>12</td><td>+4</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>7</td><td>4</td><td>3</td><td>3</td><td>-</td><td>-</td></tr>
<tr><td>13</td><td>+5</td>
<td>-</td>
<td>8</td><td>4</td><td>3</td><td>3</td><td>1</td><td>-</td></tr>
<tr><td>14</td><td>+5</td>
<td>Улучшение <span class="tableAbility">избранного врага</span>, <span class="tableAbility">Исчезновение</span></td>
<td>8</td><td>4</td><td>3</td><td>3</td><td>1</td><td>-</td></tr>
<tr><td>15</td><td>+5</td>
<td><span class="tableAbility">Умение архетипа следопыта</span></td>
<td>9</td><td>4</td><td>3</td><td>3</td><td>2</td><td>-</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>9</td><td>4</td><td>3</td><td>3</td><td>2</td><td>-</td></tr>
<tr><td>17</td><td>+6</td>
<td>-</td>
<td>10</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td></tr>
<tr><td>18</td><td>+6</td>
<td><span class="tableAbility">Дикие чувства</span></td>
<td>10</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>11</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Убийца врагов</span></td>
<td>11</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4>
<p><strong>Кость Хитов:</strong> <span class="dice"><span>1к10</span></span> за каждый уровень следопыта</p>
<p><strong>Хиты на 1 уровне:</strong> 10 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к10</span></span> (или 6) + модификатор Телосложения (суммарно минимум 1) за каждый уровень следопыта после первого</p>
<br/>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
<p><strong>Доспехи: </strong><span class="additionalAbility">Лёгкие доспехи</span>, <span class="additionalAbility">средние доспехи</span>, <span class="additionalAbility">щиты</span></p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">воинское оружие</span></p>
<p><strong>Инструменты: </strong>Нет</p>
<p><strong>Спасброски:</strong> Сила, Ловкость</p>
<p><strong>Навыки:</strong> Выберите три навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.athletics">Атлетика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.perception">Восприятие</span>, <span class="tooltipstered tooltip" tooltip-for="skill.survival">Выживание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.nature">Природа</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.investigation">Расследование</span>, <span class="tooltipstered tooltip" tooltip-for="skill.stealth">Скрытность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.animalHandling">Уход за животными</span></p>
<br/>
<h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4>
<p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">чешуйчатый доспех</span> или б) <span class="additionalAbility">кожаный доспех</span></li>
<li>а) два <span class="additionalAbility">коротких меча</span> или б) два <span class="additionalAbility">простых рукопашных оружия</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.dungeoneer">набор исследователя подземелий</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li><span class="additionalAbility">Длинный лук</span> и колчан с <span class="additionalAbility">20 стрелами</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>5к4 × 10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "избранный враг": `
	<h3 class="underlined"><span id="feature.favored-enemy">ИЗБРАННЫЙ ВРАГ</span></h3>
	<p><em>1-й уровень, умение следопыта</em></p>
	<p>У вас есть значительный опыт изучения, отслеживания, охоты и даже общения с определённым видом врагов.</p>
	<p>Выберите вид избранного врага: Аберрации, Великаны, Драконы, Звери, Исчадия, Конструкты, Монстры, Небожители, Нежить, Растения, Слизи, Феи или Элементали. В качестве альтернативы вы можете выбрать в качестве избранных врагов две гуманоидные расы (например, гноллов и орков).</p>
	<p>Вы совершаете с преимуществом проверки Мудрости (<span tooltip-for="skill.survival" class="tooltipstered tooltip">Выживание</span>) для выслеживания избранных врагов, а также проверки Интеллекта для вспоминания информации о них.</p>
	<p>Когда вы получаете это умение, вы также обучаетесь одному из языков, на котором говорит ваш избранный враг, если он вообще умеет говорить.</p>
	<p>Вы дополнительно выбираете по одному избранному врагу и языку, связанному с ним, на 6-м и 14-м уровнях. Получая уровни, ваш выбор должен отражать чудовищ, с которыми вы уже сталкивались во время приключений.</p>
	<div class="TCE-feature-on">
	<br>
	`,
    "предпочтительный противник": `
	<h3 class="underlined"><span id="feature.favored-foe">Предпочтительный противник</span></h3>
	<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта, заменяющее умение «Избранный враг» и работающее вместе с «Убийцей врагов»</em></p>
	<p>Когда вы попадаете атакой по существу, вы можете призвать силы природы, чтобы отметить существо и сделать его своим избранным врагом на 1 минуту или до тех пор, пока не потеряете концентрацию (как если бы вы концентрировались на заклинании).</p>
	<p>Первый раз в каждый свой ход, когда вы попадаете атакой по избранному врагу и наносите ему урон, в том числе и когда вы отмечаете его, вы можете дополнительно нанести <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к4</span></span> урона того же типа.</p>
	<p>Вы можете использовать это умение для отметки избранного врага количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.</p>
	<p>Дополнительный урон этого умения увеличивается, когда вы достигаете определённых уровней в этом классе: <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к6</span></span> на 6-м уровне и <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span></span> на 14-м.</p>
	</div>
	<br>
	`,
    "исследователь природы": `
	<h3 class="underlined"><span id="feature.natural-explorer">ИССЛЕДОВАТЕЛЬ ПРИРОДЫ</span></h3>
	<p><em>1-й уровень, умение следопыта</em></p>
	<p>Вы очень хорошо знакомы с одним видом природной среды и имеете большой опыт путешествий и выживания в регионах с таким климатом. Выберите один вид известной местности: Арктика, болота, горы, леса, луга, побережье, Подземье или пустыня. Когда вы совершаете проверку Интеллекта или Мудрости, связанную с известной вам местностью, ваш бонус мастерства удваивается, если вы используете навык, которым владеете.</p>
	<p>Путешествуя по избранной вами местности в течение часа или более, вы получаете следующие преимущества:</p>
	<ul>
	<li><span tooltip-for="terrain.difficult" class="tooltipstered tooltip">Труднопроходимая местность</span> не замедляет путешествие группы.</li>
	<li>Ваша группа не может заблудиться, кроме как по вине магии.</li>
	<li>Даже когда вы занимаетесь другой деятельностью во время путешествия (например, ищете пищу, ориентируетесь или занимаетесь выслеживанием), вы остаётесь готовы к опасности.</li>
	<li>Если вы путешествуете в одиночку, вы можете перемещаться скрытно в нормальном темпе.</li>
	<li>Когда вы ищете пищу, то находите в два раза больше, чем обычно.</li>
	<li>Когда вы выслеживаете других существ, вы также узнаёте их точное количество, их размеры, и как давно они прошли через область.&nbsp;</li></ul><span style="font-size: 15px; color: var(--color-text-main);">Вы можете выбрать дополнительную известную местность на 6-м и 10-м уровнях.</span><br><ul>
	</ul>
	<div class="TCE-feature-on">
	<br>
	`,
    "искусный исследователь": `
	<h3 class="underlined"><span id="feature.deft-explorer">Искусный исследователь</span></h3>
	<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта, заменяющее умение «Исследователь природы»</em></p>
	<p>Вы — непревзойдённый исследователь и отлично выживаете в природе, будучи способным как самостоятельно странствовать по дикой местности, так и помогать в этом другим. Вы получаете описанное ниже преимущество «Хитрец», а также дополнительные преимущества, описанные ниже, на 6-м и 10-м уровнях следопыта соответственно.</p>
	<h4 class="smallSectionTitle">Хитрец (1-й уровень)</h4>
	<p>Выберите один из навыков, которым вы владеете. Ваш бонус мастерства удваивается для всех проверок характеристик, которые вы совершаете, используя выбранный навык.</p>
	<p>Вы также можете говорить, читать и писать на двух дополнительных языках по вашему выбору.</p>
	<h4 class="smallSectionTitle">Бродяга (6-й уровень)</h4>
	<p>Ваша скорость ходьбы увеличивается на 5 футов, и вы получаете скорость лазания и плавания, равную вашей скорости ходьбы.</p>
	<h4 class="smallSectionTitle">Неутомимый (10-й уровень)</h4>
	<p>Действием вы можете дать себе количество временных хитов, равное <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к8</span></span> + модификатор Мудрости (минимум 1 хит). Вы можете использовать это умение количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.</p>
	<p>Помимо этого, в конце короткого отдыха ваша степень <span tooltip-for="condition.exhaustion" class="tooltipstered tooltip">истощения</span> уменьшается на 1.</p>
	</div>
	<br>
	`,
    "боевой стиль": `
	<h3 class="underlined"><span id="feature.fighting-style">Боевой стиль</span></h3>
	<p><em>2-й уровень, умение следопыта</em></p>
	<p>Вы выбираете стиль сражения, соответствующий вашей специализации. Выберите один из следующих вариантов. Вы не можете выбирать один и тот же вариант боевого стиля, даже если позже у вас будет возможность выбрать еще один стиль.</p>
	<h4 class="smallSectionTitle"><span id="fighting-style.dueling">Дуэлянт</span></h4>
	<p>Пока вы держите рукопашное оружие в одной руке, и не используете другого оружия, вы получаете бонус +2 к броскам урона этим оружием.</p>
	<h4 class="smallSectionTitle">Оборона</h4>
	<p>Пока вы носите доспехи, вы получаете бонус +1 к КД.</p>
	<h4 class="smallSectionTitle">Сражение двумя оружиями</h4>
	<p>Если вы сражаетесь с двумя оружиями, вы можете добавить модификатор характеристики к урону от второй атаки.</p>
	<h4 class="smallSectionTitle"><span id="fighting-style.archery">Стрельба</span></h4>
	<p>Вы получаете бонус +2 к броску атаки, когда атакуете дальнобойным оружием.</p>
	<div class="TCE-feature-on">
	<h4 class="smallSectionTitle">Сражение вслепую</h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональный</span> вариант боевого стиля</em></p>
	<p>Вы получаете <span tooltip-for="vision.blindsight" class="tooltipstered tooltip">слепое зрение</span> в пределах 10 футов. В пределах этой дистанции вы можете видеть всё, что не находится за <span tooltip-for="cover.full" class="tooltipstered tooltip">полным укрытием</span>, даже если вы <span tooltip-for="condition.blinded" class="tooltipstered tooltip">ослеплены</span> или находитесь в <span tooltip-for="light.darkness" class="tooltipstered tooltip">темноте</span>. Более того, вы можете увидеть <span tooltip-for="condition.invisible" class="tooltipstered tooltip">невидимое</span> существо в пределах этой дистанции, если только оно не преуспело в попытке спрятаться от вас.</p>
	<h4 class="smallSectionTitle">Воин-друид</h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональный</span> вариант боевого стиля</em></p>
	<p>Вы узнаёте два <a href="/spells/?search=&amp;level=0&amp;class=22">заговора</a> по вашему выбору из списка заклинаний друида. Они считаются заклинаниями следопыта для вас, а базовой характеристикой для этих заклинаний является ваша Мудрость. Каждый раз, когда вы получаете уровень в этом классе, вы можете заменить один из заговоров на другой из списка заклинаний друида.</p>
	<h4 class="smallSectionTitle">Сражение метательным оружием</h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональный</span> вариант боевого стиля</em></p>
	<p>Вы можете вытащить оружие со свойством «<span tooltip-for="weapon.thrown" class="tooltipstered tooltip">метательное</span>» частью атаки, которую вы совершаете этим оружием.</p>
	<p>Кроме того, когда вы попадаете по существу дальнобойной атакой, используя метательное оружие, вы получаете бонус +2 к броску урона.</p>
	</div>
	<br>
	`,
    "использование заклинаний": `
	<h3 class="underlined"><span id="feature.spellcasting">Использование заклинаний</span></h3>
	<p><em>2-й уровень, умение следопыта</em></p>
	<p>Вы обучаетесь использованию волшебной сущности природы для накладывания заклинаний подобно друиду. Вы найдёте список заклинаний, доступных следопыту в этом разделе: <a href="/spells/?search=&amp;level=&amp;school=&amp;class=17&amp;concentration=&amp;source=">заклинания следопыта</a>. Так же правила по использованию заклинаний есть в этой статье: <a href="/articles/mechanics/157-spellcasting/"><em> использование заклинаний</em></a>.</p>
	<h4 class="smallSectionTitle">Ячейки заклинаний</h4>
	<p>Таблица «Следопыт» показывает, какое количество ячеек заклинаний для сотворения заклинаний следопыта у вас есть на втором и более высоких уровнях. Для накладывания одного из этих заклинаний вы должны потратить ячейку заклинаний того же уровня или выше, что и само заклинание. Вы восстановите все потраченные ячейки, когда завершите продолжительный отдых.</p>
	<p>Например, если вы знаете заклинание 1-го уровня <a href="/spells/72-animal_friendship/">дружба с животными [animal friendship]</a>, и у вас есть ячейки 1-го и 2-го уровней, вы можете наложить заклинание <a href="/spells/72-animal_friendship/">дружба с животными [animal friendship]</a> с помощью любой из этих ячеек.</p>
	<h4 class="smallSectionTitle">Известные заклинания первого и более высоких уровней</h4>
	<p>Вы знаете два заклинания 1-го уровня на свой выбор из списка доступных следопыту.</p>
	<p>Колонка «известные заклинания» показывает, когда вы сможете выучить новые заклинания. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний. Например, когда вы достигнете 5-го уровня в этом классе, вы можете выучить одно новое заклинание 1-го или 2-го уровня.</p>
	<p>Кроме того, когда вы получаете новый уровень в этом классе, вы можете одно из известных вам заклинаний следопыта заменить на другое из списка следопыта, уровень которого тоже должен соответствовать имеющимся ячейкам заклинаний.</p>
	<h4 class="smallSectionTitle">Базовая характеристика заклинаний</h4>
	<p>При создании заклинаний следопыт использует Мудрость, так как магия отображает вашу взаимосвязь с природой. Вы используете Мудрость в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете Мудрость при определении Сл спасбросков от ваших заклинаний, и при броске атаки заклинаниями.</p>
	<p style="text-align: center;"><strong>Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Мудрости</p>
	<p style="text-align: center;"><strong>Модификатор броска атаки</strong> = ваш бонус мастерства + ваш модификатор Мудрости</p>
	<div class="TCE-feature-on">
	<h4 class="smallSectionTitle"><span id="feature.spellcasting-focus">Заклинательная фокусировка</span></h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта</em></p>
	<p>Вы можете использовать друидическую фокусировку в качестве магической фокусировки для своих заклинаний следопыта. Друидической фокусировкой может быть веточка омелы или остролиста, палочка или жезл из тиса или другого особого дерева, посох, целиком сделанный из живого дерева, или предмет, состоящий из перьев, меха, костей и зубов священных животных.</p>
	</div>
	<div class="TCE-feature-on">
	<br>
	`,
    "дополнительные заклинания": `
	<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания следопыта</span></h3>
	<p><em>2-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта</em></p>
	<p>Заклинания из представленного ниже списка расширяют ваш список заклинаний следопыта представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа.</p>
	<br><div class="table-wrapper"><table><tbody>
	<tr class="table_header"><td>Уровень заклинания</td><td>Заклинания</td></tr>
	<tr><td>1</td><td><a href="/spells/211-entangle/">опутывание [entangle]</a>, <a href="/spells/224-searing_smite/">палящая кара [searing smite]</a></td></tr>
	<tr><td>2</td><td><a href="/spells/153-magic_weapon/">магическое оружие [magic weapon]</a>, <a href="/spells/236-aid/">подмога [aid]</a>, <a href="/spells/255-gust_of_wind/">порыв ветра [gust of wind]</a>, <a href="/spells/3063-summon_beast/">призыв духа зверя [summon beast]</a>, <a href="/spells/103-enhance_ability/">улучшение характеристики [enhance ability]</a></td></tr>
	<tr><td>3</td><td><a href="/spells/24-revivify/">возрождение [revivify]</a>, <a href="/spells/318-meld_into_stone/">слияние с камнем [meld into stone]</a>, <a href="/spells/339-elemental_weapon/">стихийное оружие [elemental weapon]</a>, <a href="/spells/3070-summon_fey/">призыв духа феи [summon fey]</a></td></tr>
	<tr><td>4</td><td><a href="/spells/239-dominate_beast/">подчинение зверя [dominate beast]</a>, <a href="/spells/3068-summon_elemental/">призыв духа элементаля [summon elemental]</a></td></tr>
	<tr><td>5</td><td><a href="/spells/39-greater_restoration/">высшее восстановление [greater restoration]</a></td></tr>
	</tbody>
	</table></div>
	</div>
	
	<br>
	`,
    "архетип следопыта": `
	<h3 class="underlined"><span id="feature.ranger-archetype">АРХЕТИП СЛЕДОПЫТА</span></h3>
	<p><em>3-й уровень, умение следопыта</em></p>
	<p>Вы выбираете архетип, к которому вы стремитесь. Подробности этих архетипов приведены в конце описания класса. Выбранный вами архетип предоставляет умения на 3-м, 7-м, 11-м и 15-м уровнях.</p>
	<br>
	`,
    "первозданная осведомлённость": `
	<h3 class="underlined"><span id="feature.primeval-awareness">ПЕРВОЗДАННАЯ ОСВЕДОМЛЁННОСТЬ</span></h3>
	<p><em>3-й уровень, умение следопыта</em></p>
	<p>Вы можете действием потратить одну ячейку заклинаний следопыта, чтобы сосредоточиться на познании пространства вокруг себя. В течение 1 минуты за каждый уровень использованной ячейки заклинаний вы можете ощутить присутствие следующих видов существ в пределах 1 мили (или в пределах 6 миль, если вы находитесь в избранной местности): Аберрации, Драконы, Исчадия, Небожители, Нежить, Феи и Элементали. Это умение не раскрывает местоположение и количество существ.</p>
	<div class="TCE-feature-on">
	<br>
	`,
    "изначальная осведомлённость": `
	<h3 class="underlined"><span id="feature.primal-awareness">Изначальная осведомлённость</span></h3>
	<p><em>3-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта, заменяющее умение «Первозданная осведомлённость» </em></p>
	<p>Вы можете сфокусировать своё внимание за счёт тесной связи с природой. Вы изучаете дополнительные заклинания при достижении определённого уровня в этом классе, если вы не знаете их, как указано в таблице «Заклинания изначальной осведомлённости». Эти заклинания не учитываются в общем количестве известных вам заклинаний.</p>
	<h4 class="tableTitle">Заклинания изначальной осведомлённости</h4>
	<div class="table-wrapper"><table><tbody>
	<tr class="table_header"><td>Уровень следопыта</td><td>Заклинание</td></tr>
	<tr><td>3</td><td><a href="/spells/292-speak_with_animals/">разговор с животными [speak with animals]</a></td></tr>
	<tr><td>5</td><td><a href="/spells/76-beast_sense/">животные чувства [beast sense]</a></td></tr>
	<tr><td>9</td><td><a href="/spells/294-speak_with_plants/">разговор с растениями [speak with plants]</a></td></tr>
	<tr><td>13</td><td><a href="/spells/247-locate_creature/">поиск существа [locate creature]</a></td></tr>
	<tr><td>17</td><td><a href="/spells/199-commune_with_nature/">общение с природой [commune with nature]</a></td></tr>
	</tbody></table></div>
	<br><p>Вы можете единожды наложить каждое из этих заклинаний без использования ячеек заклинания. После того, как вы наложили заклинание таким образом, вы не сможете сделать это вновь, пока не закончите продолжительный отдых.</p>
	</div>
	<br>
	`,
    "увеличение характеристик": `
	<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
	<p><em>4-й уровень, умение следопыта</em></p>
	<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
	<div class="TCE-feature-on">
	<br>
	`,
    "универсальность воина": `
	<h3 class="underlined"><span id="feature.martial-versatility">Универсальность воина</span></h3>
	<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта</em></p>
	<p>Каждый раз, когда вы достигаете определённого уровня в этом классе и получаете умение «Увеличение характеристик», вы можете заменить известный вам боевой стиль на другой доступный следопыту. Эта замена отражает смену направления вашего развития в боевых практиках.</p>
	</div>
	<br>
	`,
    "дополнительная атака": `
	<h3 class="underlined"><span id="feature.extra-attack">ДОПОЛНИТЕЛЬНАЯ АТАКА</span></h3>
	<p><em>5-й уровень, умение следопыта</em></p>
	<p>Если вы в свой ход совершаете действие Атака, вы можете совершить две атаки вместо одной.</p>
	<br>
	`,
    "тропами земли": `
	<h3 class="underlined"><span id="feature.lands-stride">ТРОПАМИ ЗЕМЛИ</span></h3>
	<p><em>8-й уровень, умение следопыта</em></p>
	<p>Перемещение по немагической <span tooltip-for="terrain.difficult" class="tooltipstered tooltip">труднопроходимой местности</span> не стоит вам никакого дополнительного перемещения. Вы также можете проходить через немагические растения без замедления, и не получая от них урона, даже если у них есть шипы, колючки или аналогичная опасность.</p>
	<p>Кроме того, вы совершаете с преимуществом спасброски от растений, которые были магическим образом созданы или управляются магией, препятствуя движению, например, созданных заклинанием <a href="/spells/211-entangle/">опутывание [entangle]</a>.</p>
	<br>
	`,
    "маскировка на виду": `
	<h3 class="underlined"><span id="feature.hide-in-plain-sight">МАСКИРОВКА НА ВИДУ</span></h3>
	<p><em>10-й уровень, умение следопыта</em></p>
	<p>Вы можете потратить 1 минуту для создания персонального камуфляжа. У вас должен быть доступ к свежим илу, грязи, растениям, саже и другим природным материалам, с помощью которых будет создаваться камуфляж. После того как вы замаскировались подобным образом, вы можете попытаться спрятаться, прижавшись к твёрдой поверхности, такой как дерево или стена, не уступающей вам по высоте и ширине. Вы получаете бонус +10 к проверкам Ловкости (<span tooltip-for="skill.stealth" class="tooltipstered tooltip">Скрытность</span>), пока находитесь без движения и не предпринимаете действий.</p>
	<p>После того как вы переместились, совершили действие или реакцию, вы должны снова маскироваться с самого начала, чтобы получить это преимущество.</p>
	<div class="TCE-feature-on">
	<br>
	`,
    "природная завеса": `
	<h3 class="underlined"><span id="feature.natures-veil">Природная завеса</span></h3>
	<p><em>10-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение следопыта, заменяющее умение «Маскировка на виду» </em></p>
	<p>Вы обращаетесь к силам природы, чтобы они ненадолго скрыли вас от посторонних глаз. Бонусным действием вы можете магическим образом стать <span tooltip-for="condition.invisible" class="tooltipstered tooltip">невидимым</span> вместе со своим снаряжением, которое вы несёте или носите, до начала вашего следующего хода.</p>
	<p>Вы можете использовать это умение количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.</p>
	</div>
	<br>
	`,
    исчезновение: `
	<h3 class="underlined"><span id="feature.vanish">ИСЧЕЗНОВЕНИЕ</span></h3>
	<p><em>14-й уровень, умение следопыта</em></p>
	<p>Вы можете в свой ход совершать действие <span tooltip-for="action.hide" class="tooltipstered tooltip">Засада</span> бонусным действием. Кроме того, вы не можете быть выслежены немагическими способом, если вы не оставите след намеренно.</p>
	<br>
	`,
    "дикие чувства": `
	<h3 class="underlined"><span id="feature.feral-senses">ДИКИЕ ЧУВСТВА</span></h3>
	<p><em>18-й уровень, умение следопыта</em></p>
	<p>Вы получаете сверхъестественные чувства, которые помогут вам сражаться с существами, которых вы не можете увидеть. Когда вы атакуете существо, которое не видите, ваша неспособность видеть не накладывает помеху броскам атаки по нему.</p>
	<p>Вам также известно о местонахождении всех невидимых существ в пределах 30 футов от вас, при условии, что они не скрыты от вас, и вы не <span tooltip-for="condition.blinded" class="tooltipstered tooltip">ослеплены</span> и не <span tooltip-for="condition.deafened" class="tooltipstered tooltip">оглушены</span>.</p>
	<br>
	`,
    "убийца врагов": `
	<h3 class="underlined"><span id="feature.foe-slayer">УБИЙЦА ВРАГОВ</span></h3>
	<p><em>20-й уровень, умение следопыта</em></p>
	<p>Вы становитесь беспрецедентным охотником на своих врагов. Один раз в каждом своём ходу вы можете добавить модификатор Мудрости к броску атаки или урона по существу из списка ваших избранных врагов. Вы можете использовать это умение до или после броска, но до того, как эффекты броска вступят в силу.</p>
	`,
  },
};
module.exports = details;
