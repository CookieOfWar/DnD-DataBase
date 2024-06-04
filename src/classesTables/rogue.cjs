const details = {
  table: `
<table class="class_table class_table_4"><tbody>
<tr class="table_header">
<td><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td><span class="long">Скрытая<br/>атака</span><span class="short tooltip tooltipstered">са</span></td>
<td>Умения</td>
</tr>
<tr> <td>1</td><td>+2</td> <td><span class="dice"><span>1к6</span></span></td><td><span class="tableAbility">Компетентность</span>, <span class="tableAbility">Скрытая атака</span>, <span class="tableAbility">Воровской жаргон</span></td></tr>
<tr> <td>2</td><td>+2</td> <td><span class="dice"><span>1к6</span></span></td><td><span class="tableAbility">Хитрое действие</span></td></tr>
<tr> <td>3</td><td>+2</td> <td><span class="dice"><span>2к6</span></span></td><td><span class="tableAbility">Архетип плута</span>, <span class="tableAbility">Точное прицеливание</span></td></tr>
<tr> <td>4</td><td>+2</td> <td><span class="dice"><span>2к6</span></span></td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr> <td>5</td><td>+3</td> <td><span class="dice"><span>3к6</span></span></td><td><span class="tableAbility">Невероятное уклонение</span></td></tr>
<tr> <td>6</td><td>+3</td> <td><span class="dice"><span>3к6</span></span></td><td><span class="tableAbility">Компетентность</span></td></tr>
<tr> <td>7</td><td>+3</td> <td><span class="dice"><span>4к6</span></span></td><td><span class="tableAbility">Увертливость</span></td></tr>
<tr> <td>8</td><td>+3</td> <td><span class="dice"><span>4к6</span></span></td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr> <td>9</td><td>+4</td> <td><span class="dice"><span>5к6</span></span></td><td><span class="tableAbility">Умение архетипа плута</span></td></tr>
<tr><td>10</td><td>+4</td> <td><span class="dice"><span>5к6</span></span></td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>11</td><td>+4</td> <td><span class="dice"><span>6к6</span></span></td><td><span class="tableAbility">Надежный талант</span></td></tr>
<tr><td>12</td><td>+4</td> <td><span class="dice"><span>6к6</span></span></td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>13</td><td>+5</td> <td><span class="dice"><span>7к6</span></span></td><td><span class="tableAbility">Умение архетипа плута</span></td></tr>
<tr><td>14</td><td>+5</td> <td><span class="dice"><span>7к6</span></span></td><td><span class="tableAbility">Слепое зрение</span></td></tr>
<tr><td>15</td><td>+5</td> <td><span class="dice"><span>8к6</span></span></td><td><span class="tableAbility">Скользкий ум</span></td></tr>
<tr><td>16</td><td>+5</td> <td><span class="dice"><span>8к6</span></span></td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>17</td><td>+6</td> <td><span class="dice"><span>9к6</span></span></td><td><span class="tableAbility">Умение архетипа плута</span></td></tr>
<tr><td>18</td><td>+6</td> <td><span class="dice"><span>9к6</span></span></td><td><span class="tableAbility">Неуловимость</span></td></tr>
<tr><td>19</td><td>+6</td><td><span class="dice"><span>10к6</span></span></td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>20</td><td>+6</td><td><span class="dice"><span>10к6</span></span></td><td><span class="tableAbility">Удача</span></td></tr>
</tbody></table>
`,
  additionalInfo: `
<div bis_skin_checked="1" class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4>
<p><strong>Кость Хитов: </strong><span class="dice"><span>1к8</span></span> за каждый уровень плута</p>
<p><strong>Хиты на 1 уровне:</strong> 8 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к8</span></span> (или 5) + модификатор Телосложения (суммарно минимум 1) за каждый уровень плута после первого</p>
<br/>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
<p><strong>Доспехи: </strong><span class="additionalAbility">Лёгкие доспехи</span></p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">ручные арбалеты</span>, <span class="additionalAbility">длинные мечи</span>, <span class="additionalAbility">рапиры</span>, <span class="additionalAbility">короткие мечи</span></p>
<p><strong>Инструменты:</strong> <span class="tooltipstered tooltip" tooltip-for="tools.thief">Воровские инструменты</span></p>
<p><strong>Спасброски:</strong> Ловкость, Интеллект</p>
<p><strong>Навыки:</strong> Выберите четыре навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.acrobatics">Акробатика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.athletics">Атлетика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.perception">Восприятие</span>, <span class="tooltipstered tooltip" tooltip-for="skill.performance">Выступление</span>, <span class="tooltipstered tooltip" tooltip-for="skill.intimidation">Запугивание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.sleightOfHand">Ловкость рук</span>, <span class="tooltipstered tooltip" tooltip-for="skill.deception">Обман</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.investigation">Расследование</span>, <span class="tooltipstered tooltip" tooltip-for="skill.stealth">Скрытность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.persuasion">Убеждение.</span></p>
<br/>
<h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4>
<p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">рапира</span> или б) <span class="additionalAbility">короткий меч</span></li>
<li>а) <span class="additionalAbility">короткий лук</span> и колчан с <span class="additionalAbility">20 стрелами</span> или б) <span class="additionalAbility">короткий меч</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.burglar">набор взломщика</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.dungeoneer">набор исследователя подземелий</span> или в) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li><span class="additionalAbility">Кожаная броня</span>, два <span class="additionalAbility">кинжала</span>, <span class="tooltipstered tooltip" tooltip-for="tools.thief">воровские инструменты</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>4к4 × 10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    компетентность: `
	<h3 class="underlined"><span id="feature.expertise">КОМПЕТЕНТНОСТЬ</span></h3>
	<p><em>1-й уровень, умение плута</em></p>
	<p>Выберите два ваших владения в навыках или одно владение навыком и владение <span tooltip-for="tools.thief" class="tooltipstered tooltip">воровскими инструментами</span>. Ваш бонус мастерства удваивается для всех проверок характеристик, которые вы совершаете, используя любое из выбранных владений.</p>
	<p>На 6-м уровне вы можете выбрать ещё два владения (навыки или воровские инструменты), чтобы получить эту же выгоду.</p>
	<br>
	`,
    "скрытая атака": `
	<h3 class="underlined"><span id="feature.sneak-attack">СКРЫТАЯ АТАКА</span></h3>
	<p><em>1-й уровень, умение плута</em></p>
	<p>Вы знаете, как точно наносить удар и использовать отвлечение врага. Один раз в ход вы можете причинить дополнительные <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к6</span></span> урона одному из существ, по которому вы попали атакой, совершённой с преимуществом. Атака должна использовать дальнобойное оружие или оружие со свойством «<span tooltip-for="weapon.finesse" class="tooltipstered tooltip">фехтовальное</span>». Вам не нужно иметь преимущество при броске атаки, если другой враг цели находится в пределах 5 футов от неё. Этот враг не должен быть <span tooltip-for="condition.incapacitated" class="tooltipstered tooltip">недееспособным</span>, и у вас не должно быть помехи для броска атаки.</p>
	<p>Дополнительный урон увеличивается, когда вы получаете уровни в этом классе, как показано в колонке «скрытая атака».</p>
	<br>
	`,
    "воровской жаргон": `
	<h3 class="underlined"><span id="feature.thieves-cant">ВОРОВСКОЙ ЖАРГОН</span></h3>
	<p><em>1-й уровень, умение плута</em></p>
	<p>Во время плутовского обучения вы выучили воровской жаргон, тайную смесь диалекта, жаргона и шифра, который позволяет скрывать сообщения в, казалось бы, обычном разговоре. Только другое существо, знающее воровской жаргон, понимает такие сообщения. Это занимает в четыре раза больше времени, нежели передача тех же слов прямым текстом.</p>
	<p>Кроме того, вы понимаете набор секретных знаков и символов, используемый для передачи коротких и простых сообщений. Например, является ли область опасной или территорией гильдии воров, находится ли поблизости добыча, простодушны ли люди в округе, и предоставляют ли здесь безопасное убежище для воров в бегах.</p>
	<br>
	`,
    "хитрое действие": `
	<h3 class="underlined"><span id="feature.cunning-action">ХИТРОЕ ДЕЙСТВИЕ</span></h3>
	<p><em>2-й уровень, умение плута</em></p>
	<p>Ваше мышление и ловкость позволяют двигаться и действовать быстрее. Вы можете в каждом своем ходу боя совершать бонусное действие. Это действие может быть использовано только для <span tooltip-for="action.dash" class="tooltipstered tooltip">Рывка</span>, <span tooltip-for="action.disengage" class="tooltipstered tooltip">Отхода</span> или <span tooltip-for="action.hide" class="tooltipstered tooltip">Засады</span>.</p>
	<br>
	`,
    "архетип плута": `
	<h3 class="underlined"><span id="feature.roguish-archetype">АРХЕТИП ПЛУТА</span></h3>
	<p><em>3-й уровень, умение плута</em></p>
	<p>Вы выбираете архетип, который отображает ваши плутовские способности. Подробности всех архетипов находятся <span>ниже</span>. Выбранный вами архетип предоставляет умения на 3-м, 9-м, 13-м и 17-м уровнях.</p>
	<div class="TCE-feature-on" bis_skin_checked="1">
	<br>
	`,
    "точное прицеливание": `
	<h3 class="underlined"><span id="feature.steady-aim">Точное прицеливание</span></h3>
	<p><em>3-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение плута</em></p>
	<p>Бонусным действием вы можете дать себе преимущество на следующий бросок атаки в текущем ходу. Вы можете использовать это бонусное действие только в том случае, если не перемещались в этом ходу. После того, как вы используете его, ваша скорость станет равной 0 до конца текущего хода.</p>
	</div>
	<br>
	`,
    "увеличение характеристик": `
	<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
	<p><em>4-й уровень, умение плута</em></p>
	<p>При достижении 4-го, 8-го, 10-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <span class="feat">черту</span>.</p>
	<br>
	`,
    "невероятное уклонение": `
	<h3 class="underlined"><span id="feature.uncanny-dodge">НЕВЕРОЯТНОЕ УКЛОНЕНИЕ</span></h3>
	<p><em>5-й уровень, умение плута</em></p>
	<p>Когда нападающий, которого вы можете видеть, попадает по вам атакой, вы можете реакцией уменьшить вдвое урон, причиняемый вам этой атакой.</p>
	<br>
	`,
    увёртливость: `
	<h3 class="underlined"><span id="feature.evasion">УВЁРТЛИВОСТЬ</span></h3>
	<p><em>7-й уровень, умение плута</em></p>
	<p>Вы можете ловко увернуться от зональных эффектов, например, огненного дыхания красного дракона или заклинания <span class="spellTip">град</span>. Если вы попадаете под действие эффекта, который позволяет вам совершить спасбросок Ловкости, чтобы получить только половину урона, вместо этого вы не получаете вовсе никакого урона, если спасбросок был успешен, и получаете только половину урона, если он был провален.</p>
	<br>
	`,
    "надёжный талант": `
	<h3 class="underlined"><span id="feature.reliable-talent">НАДЁЖНЫЙ ТАЛАНТ</span></h3>
	<p><em>11-й уровень, умение плута</em></p>
	<p>Вы улучшаете выбранные навыки, пока они не достигнут совершенства. Каждый раз, когда вы совершаете проверку характеристики, которая позволяет добавить бонус мастерства, вы можете при выпадении на к20 результата «1–9» считать, что выпало «10».</p>
	<br>
	`,
    "слепое зрение": `
	<h3 class="underlined"><span id="feature.blindsense">СЛЕПОЕ ЗРЕНИЕ</span></h3>
	<p><em>14-й уровень, умение плута</em></p>
	<p>Если вы можете слышать, то знаете о местонахождении всех скрытых и <span tooltip-for="condition.invisible" class="tooltipstered tooltip">невидимых</span> существ в пределах 10 футов от себя.</p>
	<br>
	`,
    "скользкий ум": `
	<h3 class="underlined"><span id="feature.slippery-mind">СКОЛЬЗКИЙ УМ</span></h3>
	<p><em>15-й уровень, умение плута</em></p>
	<p>Вы увеличиваете силу мышления. Вы получаете владение спасбросками Мудрости.</p>
	<br>
	`,
    неуловимость: `
	<h3 class="underlined"><span id="feature.elusive">НЕУЛОВИМОСТЬ</span></h3>
	<p><em>18-й уровень, умение плута</em></p>
	<p>Вы можете уклоняться так хорошо, что противник крайне редко может взять над вами верх. Никакие броски атаки не получают преимущества над вами, пока вы не станете <span tooltip-for="condition.incapacitated" class="tooltipstered tooltip">недееспособным</span>.</p>
	<br>
	`,
    удача: `
	<h3 class="underlined"><span id="feature.stroke-of-luck">УДАЧА</span></h3>
	<p><em>20-й уровень, умение плута</em></p>
	<p>Вы получаете сверхъестественный дар преуспевать, когда это нужнее всего. Если ваша атака промахивается по цели, находящейся в пределах досягаемости, вы можете изменить промах на попадание. В качестве альтернативы, если вы провалили проверку характеристики, вы можете заменить результат, выпавший на к20, на «20».</p>
	<p>Использовав это умение, вы не можете использовать его повторно, пока не завершите короткий или продолжительный отдых.</p>
	`,
  },
};
module.exports = details;
