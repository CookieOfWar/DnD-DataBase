const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header">
<td><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td>Умения</td>
<td><span class="long">Ярость</span><span class="short tooltip tooltipstered">кя</span></td>
<td><span class="long">Урон ярости</span><span class="short tooltip tooltipstered">уя</span></td>
</tr>
<tr><td>1</td><td>+2</td>
<td><span class="tableAbility">Защита без доспехов</span>, <span class="tableAbility">Ярость</span></td>
<td>2</td><td>+2</td></tr>
<tr><td>2</td><td>+2</td>
<td><span class="tableAbility">Безрассудная атака</span>, <span class="tableAbility">Чувство опасности</span></td>
<td>2</td><td>+2</td></tr>
<tr><td>3</td><td>+2</td>
<td><span class="tableAbility">Путь дикости</span>, <span class="tableAbility">Первобытное знание</span></td>
<td>3</td><td>+2</td></tr>
<tr><td>4</td><td>+2</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>3</td><td>+2</td></tr>
<tr><td>5</td><td>+3</td>
<td><span class="tableAbility">Быстрое передвижение</span>, <span class="tableAbility">Дополнительная атака</span></td>
<td>3</td><td>+2</td></tr>
<tr><td>6</td><td>+3</td>
<td><span class="tableAbility">Умение пути</span></td>
<td>4</td><td>+2</td></tr>
<tr><td>7</td><td>+3</td>
<td><span class="tableAbility">Дикий инстинкт</span>, <span class="tableAbility">Инстинктивный бросок</span></td>
<td>4</td><td>+2</td></tr>
<tr><td>8</td><td>+3</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>4</td><td>+2</td></tr>
<tr><td>9</td><td>+4</td>
<td><span class="tableAbility">Сильный критический удар (1 кость)</span></td>
<td>4</td><td>+3</td></tr>
<tr><td>10</td><td>+4</td>
<td><span class="tableAbility">Умение пути</span>, <span class="tableAbility">Первобытное знание</span></td>
<td>4</td><td>+3</td></tr>
<tr><td>11</td><td>+4</td>
<td><span class="tableAbility">Непреклонная ярость</span></td>
<td>4</td><td>+3</td></tr>
<tr><td>12</td><td>+4</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>+3</td></tr>
<tr><td>13</td><td>+5</td>
<td><span class="tableAbility">Сильный критический удар (2 кости)</span></td>
<td>5</td><td>+3</td></tr>
<tr><td>14</td><td>+5</td>
<td><span class="tableAbility">Умение пути</span></td>
<td>5</td><td>+3</td></tr>
<tr><td>15</td><td>+5</td>
<td><span class="tableAbility">Непрерывная ярость</span></td>
<td>5</td><td>+3</td></tr>
<tr><td>16</td><td>+5</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>+4</td></tr>
<tr><td>17</td><td>+6</td>
<td><span class="tableAbility">Сильный критический удар (3 кости)</span></td>
<td>6</td><td>+4</td></tr>
<tr><td>18</td><td>+6</td>
<td><span class="tableAbility">Неукротимая мощь</span></td>
<td>6</td><td>+4</td></tr>
<tr><td>19</td><td>+6</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>6</td><td>+4</td></tr>
<tr><td>20</td><td>+6</td>
<td><span class="tableAbility">Дикий чемпион</span></td>
<td><span class="long">Неограниченно</span><span class="short tooltip tooltipstered">∞</span></td><td>+4</td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение<span class="spoiler_head_button">свернуть</span></h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4><p><strong>Кость Хитов: </strong><span class="dice"><span>1к12</span><span></span></span> за каждый уровень варвара</p>
<p><strong>Хиты на 1 уровне:</strong> 12 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к12</span><span></span></span> (или 7) + модификатор Телосложения (суммарно минимум 1) за каждый уровень варвара после первого</p>
<br/>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4><p><strong>Доспехи:</strong> <span class="additionalAbility">Лёгкие доспехи</span>, <span class="additionalAbility">средние доспехи</span>, <span class="additionalAbility">щиты</span></p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">воинское оружие</span></p>
<p><strong>Инструменты:</strong> Нет</p>
<p><strong>Спасброски: </strong>Сила, Телосложение</p>
<p><strong>Навыки: </strong>Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.athletics">Атлетика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.perception">Восприятие</span>, <span class="tooltipstered tooltip" tooltip-for="skill.survival">Выживание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.intimidation">Запугивание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.nature">Природа</span>, <span class="tooltipstered tooltip" tooltip-for="skill.animalHandling">Уход за животными</span></p>
<br/>
<h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4><p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">секира</span> или б) любое <span class="additionalAbility">воинское рукопашное оружие</span></li>
<li>а) два <span class="additionalAbility">ручных топора</span> или б) любое <span class="additionalAbility">простое оружие</span></li>
<li><span><span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">Набор путешественника</span> и четыре <span class="additionalAbility">метательных копья</span></span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>2к4×10</span><span></span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "защита без доспехов": `
<h3 class="underlined"><span id="feature.unarmored-defence">ЗАЩИТА БЕЗ ДОСПЕХОВ</span></h3><p><em>1-й уровень, умение варвара</em></p>
<p>Если вы не носите доспехов, ваш Класс Доспеха равен 10 + модификатор Ловкости + модификатор Телосложения. Вы можете использовать щит, не теряя этого преимущества.</p>
<br>
`,
    ярость: `
<h3 class="underlined"><span id="feature.rage">ЯРОСТЬ</span></h3><p><em>1-й уровень, умение варвара</em></p>
<p>В бою вы сражаетесь с первобытной свирепостью. В свой ход вы можете бонусным действием войти в состояние ярости.</p>
<p>В состоянии ярости вы получаете следующие преимущества, если не носите тяжёлую броню:</p>
<ul>
<li>Вы совершаете с преимуществом проверки и спасброски Силы.</li>
<li>Если вы совершаете рукопашную атаку оружием, используя Силу, вы получаете бонус к броску урона, соответствующий вашему уровню варвара, как показано в колонке «урон ярости» таблицы «Варвар».</li>
<li>Вы получаете сопротивление дробящему, колющему и рубящему урону.</li>
</ul>
<p>Если вы способны накладывать заклинания, то вы не можете накладывать или концентрироваться на заклинаниях, пока находитесь в состоянии ярости.</p>
<p>Ваша ярость длится 1 минуту. Она прекращается раньше, если вы потеряли сознание или если вы закончили свой ход, не получив урон или не атаковав враждебное по отношению к вам существо с момента окончания вашего прошлого хода. Также вы можете прекратить свою ярость бонусным действием.</p>
<p>Если вы впадали в состояние ярости максимальное для вашего уровня количество раз (смотрите колонку «ярость»), то вы должны совершить продолжительный отдых, прежде чем сможете использовать ярость ещё раз.</p>
<br>
`,
    "безрассудная атака": `
<h3 class="underlined"><span id="feature.reckless-attack">БЕЗРАССУДНАЯ АТАКА</span></h3><p><em>2-й уровень, умение варвара</em></p>
<p>Вы способны отбросить любую заботу о защите, чтобы атаковать ожесточённо и безрассудно. Когда вы совершаете первую атаку в свой ход, вы можете решить, что будете атаковать безрассудно. Решившись на это, вы в этом ходу совершаете рукопашные атаки оружием, использующие Силу, с преимуществом, но все броски атаки по вам до вашего следующего хода тоже совершаются с преимуществом.</p>
<br>
`,
    "чувство опасности": `
<h3 class="underlined"><span id="feature.danger-sense">ЧУВСТВО ОПАСНОСТИ</span></h3><p><em>2-й уровень, умение варвара</em></p>
<p>Вы получаете обострённое ощущение происходящего вокруг, помогающее вам избегать опасности.</p>
<p>Вы совершаете с преимуществом спасброски Ловкости от эффектов, которые вы можете видеть, такие как заклинания и ловушки. Для использования этого преимущества вы не должны быть <span tooltip-for="condition.blinded" class="tooltipstered tooltip">ослеплены</span>, <span tooltip-for="condition.deafened" class="tooltipstered tooltip">оглушены</span> и не должны быть <span tooltip-for="condition.incapacitated" class="tooltipstered tooltip">недееспособны</span>.</p>
<br>
`,
    "путь дикости": `
<h3 class="underlined"><span id="feature.primal-path">ПУТЬ ДИКОСТИ</span></h3><p><em>3-й уровень, умение варвара</em></p>
<p>Вы выбираете путь, определяющий природу вашей ярости. Все пути перечислены в конце описания класса. Ваш выбор обеспечит вам умения на 3-м, 6-м, 10-м и 14-м уровнях.</p>
<div class="TCE-feature-on"><br>
`,
    "первобытное знание": `
<h3 class="underlined"><span id="feature.primal-knowledge">Первобытное знание</span></h3><p><em>3-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение варвара </em></p>
<p>Когда вы достигаете 3-го и 10-го уровней, вы получаете владение дополнительным навыком по вашему выбору из списка навыков, доступных варвару на 1-м уровне.</p>
</div>
<br>
`,
    "увеличение характеристик": `
<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3><p><em>4-й уровень, умение варвара</em></p>
<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
<br>
`,
    "быстрое передвижение": `
<h3 class="underlined"><span id="feature.fast-movement">БЫСТРОЕ ПЕРЕДВИЖЕНИЕ</span></h3><p><em>5-й уровень, умение варвара</em></p>
<p>Ваша скорость увеличивается на 10 футов, если вы не носите тяжёлые доспехи.</p>
<br>
`,
    "дополнительная атака": `
<h3 class="underlined"><span id="feature.extra-attack">ДОПОЛНИТЕЛЬНАЯ АТАКА</span></h3><p><em>5-й уровень, умение варвара</em></p>
<p>Если вы в свой ход совершаете действие Атака, вы можете совершить две атаки вместо одной.</p>
<br>
`,
    "дикий инстинкт": `
<h3 class="underlined"><span id="feature.feral-instinct">ДИКИЙ ИНСТИНКТ</span></h3><p><em>7-й уровень, умение варвара</em></p>
<p>Ваши инстинкты настолько обостряются, что вы совершаете с преимуществом броски инициативы.</p>
<p>Кроме того, если вы были захвачены врасплох в начале боя, и вы не являетесь <span tooltip-for="condition.incapacitated" class="tooltipstered tooltip">недееспособным</span>, вы можете в первом ходу действовать нормальным образом, но только если вы впадёте в ярость раньше всех других действий в этом ходу.</p>
<div class="TCE-feature-on"><br>
`,
    "инстинктивный бросок": `
<h3 class="underlined"><span id="feature.instinctive-pounce">Инстинктивный бросок</span></h3><p><em>7-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение варвара </em></p>
<p>Частью бонусного действия, которым вы входите в ярость, вы можете переместиться на расстояние до половины своей скорости.</p>
</div>
<br>
`,
    "сильный критический удар": `
<h3 class="underlined"><span id="feature.brutal-critical">СИЛЬНЫЙ КРИТИЧЕСКИЙ УДАР</span></h3><p><em>9-й уровень, умение варвара</em></p>
<p>Вы можете бросать одну дополнительную кость урона оружия, когда определяете дополнительный урон от критического попадания рукопашной атакой. Количество костей увеличивается до двух на 13-м уровне и трёх на 17-м уровне.</p>
<br>
`,
    "непреклонная ярость": `
<h3 class="underlined"><span id="feature.relentless-rage">НЕПРЕКЛОННАЯ ЯРОСТЬ</span></h3><p><em>11-й уровень, умение варвара</em></p>
<p>Ваша ярость позволяет вам сражаться, несмотря на тяжелейшие раны. Если ваши хиты опускаются до 0, когда вы в состоянии ярости, и вы не <span tooltip-for="death.instant" class="tooltipstered tooltip">умерли сразу</span>, вы можете совершить спасбросок Телосложения Сл 10. При успехе ваши хиты опускаются всего лишь до 1 хита.</p>
<p>Каждый раз, когда вы используете это умение повторно, Сл спасброска повышается на 5. Когда вы закончите короткий либо продолжительный отдых, Сл снова равняется 10.</p>
<br>
`,
    "непрерывная ярость": `
<h3 class="underlined"><span id="feature.persistent-rage">НЕПРЕРЫВНАЯ ЯРОСТЬ</span></h3><p><em>15-й уровень, умение варвара</em></p>
<p>Ваша ярость становится настолько сильной, что досрочно прекращается, только если вы <span tooltip-for="condition.unconscious" class="tooltipstered tooltip">теряете сознание</span> или сами прекращаете её.</p>
<br>
`,
    "неукротимая мощь": `
<h3 class="underlined"><span id="feature.indomitable-might">НЕУКРОТИМАЯ МОЩЬ</span></h3><p><em>18-й уровень, умение варвара</em></p>
<p>Если результат вашей проверки Силы оказался меньше значения вашей Силы, то вы можете использовать значение характеристики вместо результата проверки.</p>
<br>
`,
    "дикий чемпион": `
<h3 class="underlined"><span id="feature.primal-champion">ДИКИЙ ЧЕМПИОН</span></h3><p><em>20-й уровень, умение варвара</em></p>
<p>Вы становитесь воплощением силы дикой природы. Значение ваших Силы и Телосложения увеличивается на 4. Максимальное значение для этих характеристик теперь 24.</p>
`,
  },
};
module.exports = details;
