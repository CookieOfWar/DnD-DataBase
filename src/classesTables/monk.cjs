const details = {
  table: `
<table class="class_table class_table_6" id="class-table"><tbody>
<tr class="table_header"><td><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td><span class="long">Боевые<br/>искусства</span><span class="short tooltip tooltipstered">би</span></td>
<td><span class="long">Очки<br/>ци</span><span class="short tooltip tooltipstered">ци</span></td>
<td><span class="long">Скорость без<br/>доспехов</span><span class="short tooltip tooltipstered">бд</span></td>
<td>Умения</td>
</tr>
<tr><td>1</td><td>+2</td><td><span class="dice"><span>1к4</span></span></td><td>—</td><td>—</td>
<td><span class="tableAbility">Защита без доспехов</span>, <span class="tableAbility">Боевые искусства</span></td></tr>
<tr><td>2</td><td>+2</td><td><span class="dice"><span>1к4</span></span></td><td>2</td><td>+10 футов</td>
<td><span class="tableAbility">Движение без доспехов</span>, <span class="tableAbility">Ци</span>, <span class="tableAbility">Выбранное оружие</span></td></tr>
<tr><td>3</td><td>+2</td><td><span class="dice"><span>1к4</span></span></td><td>3</td><td>+10 футов</td>
<td><span class="tableAbility">Монастырская традиция</span>, <span class="tableAbility">Отражение снарядов</span>, <span class="tableAbility">Атака, наделенная ци</span></td></tr>
<tr><td>4</td><td>+2</td><td><span class="dice"><span>1к4</span></span></td><td>4</td><td>+10 футов</td>
<td><span class="tableAbility">Медленное падение</span>, <span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Ускоренное исцеление</span></td></tr>
<tr><td>5</td><td>+3</td><td><span class="dice"><span>1к6</span></span></td><td>5</td><td>+10 футов</td>
<td><span class="tableAbility">Дополнительная атака</span>, <span class="tableAbility">Ошеломляющий удар</span>, <span class="tableAbility">Фокусировка на цели</span></td></tr>
<tr><td>6</td><td>+3</td><td><span class="dice"><span>1к6</span></span></td><td>6</td><td>+15 футов</td>
<td><span class="tableAbility">Умение монастырской традиции</span>, <span class="tableAbility">Энергетические удары</span></td></tr>
<tr><td>7</td><td>+3</td><td><span class="dice"><span>1к6</span></span></td><td>7</td><td>+15 футов</td>
<td><span class="tableAbility">Спокойствие разума</span>, <span class="tableAbility">Увертливость</span></td></tr>
<tr><td>8</td><td>+3</td><td><span class="dice"><span>1к6</span></span></td><td>8</td><td>+15 футов</td>
<td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>9</td><td>+4</td><td><span class="dice"><span>1к6</span></span></td><td>9</td><td>+15 футов</td>
<td><span class="tableAbility">Улучшенное движение без доспехов</span></td></tr>
<tr><td>10</td><td>+4</td><td><span class="dice"><span>1к6</span></span></td><td>10</td><td>+20 футов</td>
<td><span class="tableAbility">Чистота тела</span></td></tr>
<tr><td>11</td><td>+4</td><td><span class="dice"><span>1к8</span></span></td><td>11</td><td>+20 футов</td>
<td><span class="tableAbility">Умение монастырской традиции</span></td></tr>
<tr><td>12</td><td>+4</td><td><span class="dice"><span>1к8</span></span></td><td>12</td><td>+20 футов</td>
<td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>13</td><td>+5</td><td><span class="dice"><span>1к8</span></span></td><td>13</td><td>+20 футов</td>
<td><span class="tableAbility">Язык солнца и луны</span></td></tr>
<tr><td>14</td><td>+5</td><td><span class="dice"><span>1к8</span></span></td><td>14</td><td>+25 футов</td>
<td><span class="tableAbility">Алмазная душа</span></td></tr>
<tr><td>15</td><td>+5</td><td><span class="dice"><span>1к8</span></span></td><td>15</td><td>+25 футов</td>
<td><span class="tableAbility">Безвременное тело</span></td></tr>
<tr><td>16</td><td>+5</td><td><span class="dice"><span>1к8</span></span></td><td>16</td><td>+25 футов</td>
<td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>17</td><td>+6</td><td><span class="dice"><span>1к10</span></span></td><td>17</td><td>+25 футов</td>
<td><span class="tableAbility">Умение монастырской традиции</span></td></tr>
<tr><td>18</td><td>+6</td><td><span class="dice"><span>1к10</span></span></td><td>18</td><td>+30 футов</td>
<td><span class="tableAbility">Пустое тело</span></td></tr>
<tr><td>19</td><td>+6</td><td><span class="dice"><span>1к10</span></span></td><td>19</td><td>+30 футов</td>
<td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>20</td><td>+6</td><td><span class="dice"><span>1к10</span></span></td><td>20</td><td>+30 футов</td>
<td><span class="tableAbility">Совершенство</span></td></tr>
</tbody>
</table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4>
<div>
<p><strong>Кость Хитов:</strong> <span class="dice"><span>1к8</span></span> за каждый уровень монаха</p>
<p><strong>Хиты на 1 уровне:</strong> 8 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к8</span></span> (или 5) + модификатор Телосложения (суммарно минимум 1) за каждый уровень монаха после первого</p>
<br/>
</div>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
<div>
<p><strong>Доспехи: </strong>нет</p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">короткие мечи</span></p>
<p><strong>Инструменты: </strong>Выберите один вид <span>инструмента ремесленников</span>, либо <span>музыкального инструмента</span>.</p>
<p><strong>Спасброски:</strong> Сила, Ловкость</p>
<p><strong>Навыки: </strong>Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.acrobatics">Акробатика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.athletics">Атлетика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.history">История</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.religion">Религия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.stealth">Скрытность</span>.</p>
<br/>
</div>
<h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4>
<div>
<p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">короткий меч</span> или б) любое <span class="additionalAbility">простое оружие</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.dungeoneer">набор исследователя подземелий</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li><span class="additionalAbility">10 дротиков</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>5к4</span></span> зм для покупки снаряжения.</p>
</div>
</span></div>
`,
  explanations: {
    "защита без доспехов": `
	<h3 class="underlined"><span id="feature.unarmored-defence">Защита без доспехов</span></h3><p><em>1-й уровень, умение монаха</em></p>
	<p>Если вы не носите ни доспех, ни щит, ваш Класс Доспеха равен 10 + модификатор Ловкости + модификатор Мудрости.</p>
	<br>`,
    "боевые искусства": `
	<h3 class="underlined"><span id="feature.martial-arts">Боевые искусства</span></h3><p><em>1-й уровень, умение монаха</em></p>
	<p>Ваше знание боевых искусств позволяет вам эффективно использовать в бою безоружные удары и монашеское оружие — короткие мечи, а также любое простое рукопашное оружие, не имеющее свойств «<span tooltip-for="weapon.twohanded" class="tooltipstered tooltip">двуручное»</span> и «<span tooltip-for="weapon.heavy" class="tooltipstered tooltip">тяжёлое»</span>.</p>
	<p>Если вы безоружны или используете только монашеское оружие, и не носите ни доспехов, ни щита, вы получаете следующие преимущества:</p>
	<ul>
	<li>Вы можете использовать Ловкость вместо Силы для бросков атак и урона ваших безоружных ударов и атак монашеским оружием.</li>
	<li>Вы можете использовать к4 вместо обычной кости урона ваших безоружных ударов или атак монашеским оружием. Эта кость увеличивается с вашим уровнем монаха, как показано в колонке «боевые искусства».</li>
	<li>Если в свой ход вы используете действие Атака для безоружного удара или атаки монашеским оружием, вы можете бонусным действием совершить ещё один безоружный удар. Например, если вы совершили действие Атака и атаковали боевым посохом, вы можете совершить бонусным действием безоружный удар, при условии, что в этом ходу вы еще не совершали бонусное действие.</li>
	</ul>
	<p>Некоторые монастыри используют особые виды монашеского оружия. Например, вы можете использовать дубинку в виде двух деревянных брусков, соединённых короткой цепью (такое оружие называется нунчаками), или серп с более коротким и прямым лезвием (называется камой). Как бы ни называлось ваше монашеское оружие, вы используете характеристики, соответствующие этому оружию.</p>
	<br>`,
    ци: `
	<h3 class="underlined"><span id="feature.ki">Ци</span></h3><p><em>2-й уровень, умение монаха</em></p>
	<p>Ваши тренировки позволяют вам управлять мистической энергией ци. Ваш доступ к этой энергии выражается количеством очков ци. Ваш уровень монаха определяет это количество, согласно колонке «Очки ци». Вы можете использовать эти очки чтобы активировать различные умения ци. Вначале вам известны следующие три умения: «Поступь ветра», «Терпеливая оборона» и «Шквал ударов». С повышением уровня в этом классе вы выучите новые умения ци.</p>
	<p>Все потраченные очки ци восполняются по окончании короткого или продолжительного отдыха. Вы должны потратить как минимум 30 минут на медитацию для их восстановления. Некоторые из ваших умений ци требуют от цели спасброска, позволяющего избежать эффекта. Сл такого спасброска определяется следующим образом:</p>
	<p style="text-align: center;"><strong>Сл спасброска ци</strong> = 8 + ваш бонус мастерства + ваш модификатор Мудрости</p>
	<h4 class="smallSectionTitle">ПОСТУПЬ ВЕТРА</h4><p>Вы можете потратить 1 очко ци в свой ход, чтобы совершить бонусным действием <span tooltip-for="action.disengage" class="tooltipstered tooltip">Отход</span> или <span tooltip-for="action.dash" class="tooltipstered tooltip">Рывок</span>. В этот ход дальность ваших прыжков удваивается.</p>
	<h4 class="smallSectionTitle">ТЕРПЕЛИВАЯ ОБОРОНА</h4><p>Вы тратите 1 очко ци в свой ход, чтобы совершить бонусным действием <span tooltip-for="action.dodge" class="tooltipstered tooltip">Уклонение</span>.</p>
	<h4 class="smallSectionTitle">ШКВАЛ УДАРОВ</h4><p>Сразу же после того, как вы в свой ход совершили действие Атака, вы можете потратить 1 очко ци, чтобы бонусным действием совершить два безоружных удара.</p>
	<br>`,
    "движение без доспехов": `
	<h3 class="underlined"><span id="feature.unarmored-movement">Движение без доспехов</span></h3><p><em>2-й уровень, умение монаха</em></p>
	<p>Ваша скорость увеличивается на 10 футов, если вы не носите доспехов и щит. Этот бонус увеличивается с ростом вашего уровня, как показано в таблице.</p>
	<p>На 9-м уровне вы получаете возможность в свой ход перемещаться по вертикальным поверхностям и по поверхности жидкости, не падая во время движения.</p>
	<div class="TCE-feature-on"><br>`,
    "выбранное оружие": `
	<h3 class="underlined"><span id="feature.dedicated-weapon">Выбранное оружие</span></h3>
	<p><em>2-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение монаха</em></p>
	<p>Вы тренируетесь использовать в качестве монашеского оружия не только простое оружие и короткие мечи, но и другие виды оружия. Каждый раз, когда вы заканчиваете короткий или продолжительный отдых, вы можете коснуться одного оружия и направить в него свою ци, после чего это оружие считается для вас монашеским, пока вы не воспользуетесь этим умением снова.</p>
	<p>Выбранное оружие должно соответствовать следующим критериям:</p>
	<ul>
	<li>Оружие должно быть простым или воинским. </li>
	<li>Вы должны иметь владение этим оружием.</li>
	<li>У оружия не должно быть свойств «<span tooltip-for="weapon.heavy" class="tooltipstered tooltip">тяжёлое</span>» или «<span tooltip-for="weapon.special" class="tooltipstered tooltip">особое</span>».</li>
	</ul></div>
	<br>`,
    "монастырская традиция": `
	<h3 class="underlined"><span id="feature.monastic-tradition">Монастырская традиция</span></h3><p><em>3-й уровень, умение монаха</em></p>
	<p>Вы выбираете монастырскую традицию, которой следуете. Все они описаны в конце описания класса. Выбранная традиция обеспечивает вам дополнительные умения на 3-м, 6-м, 11-м и 17-м уровнях.</p>
	<br>`,
    "отражение снарядов": `
	<h3 class="underlined"><span id="feature.deflect-missiles">Отражение снарядов</span></h3><p><em>3-й уровень, умение монаха</em></p>
	<p>Вы можете реакцией отразить или поймать снаряд, если по вам попали дальнобойной атакой оружием. Если вы делаете это, урон снижается на <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к10</span></span> + ваш модификатор Ловкости + ваш уровень монаха.</p>
	<p>Если вы снизили урон до 0, вы можете поймать снаряд в случае, если он достаточно мал, чтобы держать его одной рукой, и одна из ваших рук свободна. Если вы поймали снаряд с помощью этого умения, вы можете потратить одно очко ци, чтобы частью реакции совершить дальнобойную атаку пойманным оружием или боеприпасом с дистанцией 20/60 футов. Вы совершаете эту атаку с владением, вне зависимости от владения данным оружием, и этот снаряд считается для данной атаки монашеским оружием.</p>
	<div class="TCE-feature-on"><br>`,
    "атака, наделённая ци": `
	<h3 class="underlined"><span id="feature.ki-fueled-attack">Атака, наделённая ци</span></h3>
	<p><em>3-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение монаха</em></p>
	<p>Если вы частью действия в свой ход тратите хотя бы 1 очко ци, то можете до окончания своего хода бонусным действием совершить один безоружный удар или атаку монашеским оружием.</p></div>
	<br>`,
    "увеличение характеристик": `
	<h3 class="underlined"><span id="feature.ASI">Увеличение характеристик</span></h3><p><em>4-й уровень, умение монаха</em></p>
	<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <span class="feat">черту</span>.</p>
	<br>`,
    "медленное падение": `
	<h3 class="underlined"><span id="feature.slow-fall">Медленное падение</span></h3><p><em>4-й уровень, умение монаха</em></p>
	<p>Если вы упали, вы можете реакцией уменьшить урон от падения на значение, равное вашему уровню монаха, умноженному на пять.</p>
	<div class="TCE-feature-on"><br>`,
    "ускоренное исцеление": `
	<h3 class="underlined"><span id="feature.quickened-healing">Ускоренное исцеление</span></h3>
	<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение монаха </em></p>
	<p>Действием вы можете потратить 2 очка ци и совершить бросок кости боевых искусств. Вы восстанавливаете количество хитов, равное результату броска кости боевых искусств + ваш бонус мастерства.</p></div>
	<br>`,
    "дополнительная атака": `
	<h3 class="underlined"><span id="feature.extra-attack">Дополнительная атака</span></h3><p><em>5-й уровень, умение монаха</em></p>
	<p>Если вы в свой ход совершаете действие Атака, вы можете совершить две атаки вместо одной.</p>
	<br>`,
    "ошеломляющий удар": `
	<h3 class="underlined"><span id="feature.stunning-strike">Ошеломляющий удар</span></h3><p><em>5-й уровень, умение монаха</em></p>
	<p>Вы можете взаимодействовать с энергией ци, текущей в теле вашего противника. Если вы попали по другому существу рукопашной атакой оружием, вы можете потратить 1 очко ци, чтобы нанести ошеломляющий удар. Цель должна преуспеть в спасброске Телосложения, иначе она станет <span tooltip-for="condition.stunned" class="tooltipstered tooltip">ошеломлённой</span> до конца вашего следующего хода.</p>
	<div class="TCE-feature-on"><br>`,
    "фокусировка на цели": `
	<h3 class="underlined"><span id="feature.focused-aim">Фокусировка на цели</span></h3>
	<p><em>5-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение монаха </em></p>
	<p>Когда вы промахиваетесь броском атаки, вы можете потратить от 1 до 3 очков ци, чтобы увеличить результат броска атаки на 2 за каждое затраченное очко ци, что потенциально может обратить промах в попадание.</p></div>
	<br>`,
    "энергетические удары": `
	<h3 class="underlined"><span id="feature.ki-empowered-strikes">Энергетические удары</span></h3><p><em>6-й уровень, умение монаха</em></p>
	<p>Ваши безоружные удары считаются магическими при определении преодоления сопротивления и иммунитета к немагическим атакам и урону.</p>
	<br>`,
    увёртливость: `
	<h3 class="underlined"><span id="feature.evasion">Увёртливость</span></h3><p><em>7-й уровень, умение монаха</em></p>
	<p>Ваше инстинктивное проворство позволяет вам уклоняться от эффектов, направленных на определённую область, вроде дыхания синего дракона или заклинания <span class="spellTip">огненный шар</span>. Если вы попадаете под действие эффекта, который позволяет вам совершить спасбросок Ловкости, чтобы получить только половину урона, вместо этого вы не получаете вовсе никакого урона, если спасбросок был успешен, и получаете только половину урона, если он был провален.</p>
	<br>`,
    "спокойствие разума": `
	<h3 class="underlined"><span id="feature.stillness-of-mind">Спокойствие разума</span></h3><p><em>7-й уровень, умение монаха</em></p>
	<p>Вы можете действием окончить один из действующих на вас эффектов, делающих вас <span tooltip-for="condition.charmed" class="tooltipstered tooltip">очарованным</span> или <span tooltip-for="condition.frightened" class="tooltipstered tooltip">испуганным</span>.</p>
	<br>`,
    "чистота тела": `
	<h3 class="underlined"><span id="feature.purity-of-body">Чистота тела</span></h3><p><em>10-й уровень, умение монаха</em></p>
	<p>Ваше мастерство ци даёт вам иммунитет к болезням и яду.</p>
	<br>`,
    "язык солнца и луны": `
	<h3 class="underlined"><span id="feature.tongue-of-sun-and-moon">Язык солнца и луны</span></h3><p><em>13-й уровень, умение монаха</em></p>
	<p>Вы понимаете, как взаимодействовать с энергией ци в чужом разуме, и теперь вы понимаете речь на любом языке. Кроме того, все существа, способные понимать хотя бы один язык, понимают то, что вы сказали.</p>
	<br>`,
    "алмазная душа": `
	<h3 class="underlined"><span id="feature.diamond-soul">Алмазная душа</span></h3><p><em>14-й уровень, умение монаха</em></p>
	<p>Ваше мастерство ци предоставляет вам владение всеми спасбросками. Кроме того, если вы провалили спасбросок, вы можете повторить его, потратив 1 очко ци, и должны использовать второй результат.</p>
	<br>`,
    "безвременное тело": `
	<h3 class="underlined"><span id="feature.timeless-body">Безвременное тело</span></h3><p><em>15-й уровень, умение монаха</em></p>
	<p>Ваша ци поддерживает вас, и ваше тело больше не подвержено признакам старения. Вы не можете быть состарены магически. Впрочем, вы всё еще можете умереть от старости. Кроме того, вам больше не требуется еда и вода.</p>
	<br>`,
    "пустое тело": `
	<h3 class="underlined"><span id="feature.empty-body">Пустое тело</span></h3><p><em>18-й уровень, умение монаха</em></p>
	<p>Вы можете действием потратить 4 очка ци, чтобы стать <span tooltip-for="condition.invisible" class="tooltipstered tooltip">невидимым</span> на 1 минуту. В течение этого времени вы получаете сопротивление всем видам урона, кроме урона силовым полем.</p>
	<p>Кроме того, вы можете потратить 8 очков ци, чтобы наложить заклинание <span class="spellTip">проекция в астрал</span> без применения материальных компонентов. Вы не можете перемещать кого-либо вместе с собой.</p>
	<br>`,
    совершенство: `
	<h3 class="underlined"><span id="feature.perfect-self">Совершенство</span></h3><p><em> 20-й уровень, умение монаха</em></p>
	<p>Если при броске инициативы у вас нет очков ци, вы получаете 4 очка ци.</p>
	`,
  },
};
module.exports = details;
