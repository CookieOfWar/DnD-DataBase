const details = {
  table: `
<table class="class_table"><tbody>
<tr class="table_header">
<td><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td>Умения</td>
</tr>
<tr><td> 1</td><td>+2</td><td><span class="tableAbility">Боевой стиль</span>, <span class="tableAbility">Варианты боевых стилей</span>, <span class="tableAbility">Второе дыхание</span></td></tr>
<tr><td> 2</td><td>+2</td><td><span class="tableAbility">Всплеск действий (одно использование)</span></td></tr>
<tr><td> 3</td><td>+2</td><td><span class="tableAbility">Воинский архетип</span></td></tr>
<tr><td> 4</td><td>+2</td><td><span class="tableAbility">Увеличение характеристик</span>, <span class="tableAbility">Универсальность воина</span></td></tr>
<tr><td> 5</td><td>+3</td><td><span class="tableAbility">Дополнительная атака</span></td></tr>
<tr><td> 6</td><td>+3</td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td> 7</td><td>+3</td><td><span class="tableAbility">Умение воинского архетипа</span></td></tr>
<tr><td> 8</td><td>+3</td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td> 9</td><td>+4</td><td><span class="tableAbility">Упорный (одно использование)</span></td></tr>
<tr><td>10</td><td>+4</td><td><span class="tableAbility">Умение воинского архетипа</span></td></tr>
<tr><td>11</td><td>+4</td><td><span class="tableAbility">Дополнительная атака (2)</span></td></tr>
<tr><td>12</td><td>+4</td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>13</td><td>+5</td><td><span class="tableAbility">Упорный (два использования)</span></td></tr>
<tr><td>14</td><td>+5</td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>15</td><td>+5</td><td><span class="tableAbility">Умение воинского архетипа</span></td></tr>
<tr><td>16</td><td>+5</td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>17</td><td>+6</td><td><span class="tableAbility">Всплеск действий (два использования)</span>, <span class="tableAbility">Упорный (три использования)</span></td></tr>
<tr><td>18</td><td>+6</td><td><span class="tableAbility">Умение воинского архетипа</span></td></tr>
<tr><td>19</td><td>+6</td><td><span class="tableAbility">Увеличение характеристик</span></td></tr>
<tr><td>20</td><td>+6</td><td><span class="tableAbility">Дополнительная атака (3)</span></td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение</h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4><p><strong>Кость Хитов:</strong> <span class="dice"><span>1к10</span></span> за каждый уровень воина</p>
<p><strong>Хиты на 1 уровне:</strong> 10 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к10</span></span> (или 6) + модификатор Телосложения (суммарно минимум 1) за каждый уровень воина после первого</p>
<br/><h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4><p><strong>Доспехи:</strong> <span class="additionalAbility">Все доспехи</span>, <span class="additionalAbility">щиты</span></p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Простое оружие</span>, <span class="additionalAbility">воинское оружие</span></p>
<p><strong>Инструменты:</strong> Нет</p>
<p><strong>Спасброски:</strong> Сила, Телосложение</p>
<p><strong>Навыки:</strong> Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.acrobatics">Акробатика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.athletics">Атлетика</span>, <span class="tooltipstered tooltip" tooltip-for="skill.perception">Восприятие</span>, <span class="tooltipstered tooltip" tooltip-for="skill.survival">Выживание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.intimidation">Запугивание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.history">История</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.animalHandling">Уход за животными</span></p>
<br/><h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4><p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">кольчуга</span> или б) <span class="additionalAbility">кожаный доспех</span>, <span class="additionalAbility">длинный лук</span> и <span class="additionalAbility">20 стрел</span></li>
<li>а) <span class="additionalAbility">воинское оружие</span> и <span class="additionalAbility">щит</span> или б) два <span class="additionalAbility">воинских оружия</span></li>
<li>а) <span class="additionalAbility">лёгкий арбалет</span> и <span class="additionalAbility">20 болтов</span> или б) два <span class="additionalAbility">ручных топора</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.dungeoneer">набор исследователя подземелий</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>5к4 × 10</span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "второе дыхание": `
<h3 class="underlined"><span id="feature.second-wind">ВТОРОЕ ДЫХАНИЕ</span></h3>
<p><em>1-й уровень, умение воина</em></p>
	<p>Вы обладаете ограниченным источником выносливости, которым можете воспользоваться, чтобы уберечь себя. В свой ход вы можете бонусным действием восстановить хиты в размере <span class="dice" onclick="return ROLLtABLE.rollDice(this);"><span>1к10</span></span> + ваш уровень воина.</p>
	<p>Использовав это умение, вы должны завершить короткий либо продолжительный отдых, чтобы получить возможность использовать его снова.</p>
<br>`,
    "всплеск действий": `
<h3 class="underlined"><span id="feature.action-surge">ВСПЛЕСК ДЕЙСТВИЙ</span></h3>
<p><em>2-й уровень, умение воина</em></p>
	<p>Вы получаете возможность на мгновение преодолеть обычные возможности. В свой ход вы можете совершить одно дополнительное действие помимо обычного и бонусного действий. Использовав это умение, вы должны завершить короткий или продолжительный отдых, чтобы получить возможность использовать его снова. Начиная с 17-го уровня, вы можете использовать это умение дважды, прежде чем вам понадобится отдых, но в течение одного хода его всё равно можно использовать лишь один раз.</p>
<br>`,
    "воинский архетип": `
<h3 class="underlined"><span id="feature.martial-archetype">ВОИНСКИЙ АРХЕТИП</span></h3>
<p><em>3-й уровень, умение воина</em></p>
	<p>Вы выбираете архетип, отражающий стиль и технику, к которым вы стремитесь. Подробности всех архетипов приведены <a href="#martial-archetypes">ниже</a>. Выбранный вами архетип предоставляет вам умения на 3-м, 7-м, 10-м, 15-м и 18-м уровнях.</p>
<br>`,
    "увеличение характеристик": `
<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
<p><em>4-й уровень, умение воина</em></p>
<p>При достижении 4-го, потом 6-го, 8-го,12-го,14-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
<div class="TCE-feature-on"><br>`,
    "универсальность воина": `
<h3 class="underlined"><span id="feature.martial-versatility">Универсальность воина</span></h3>
	<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение воина </em></p>
	<p>Каждый раз, когда вы достигаете определённого уровня в этом классе и получаете умение «Увеличение характеристик», вы можете сделать одно из следующих действий, отражающих смену направления вашего развития в боевых практиках:</p>
	<ul>
	<li>Замените известный вам боевой стиль на другой из тех, что доступны воину. </li>
	<li>Если вам известен какой-либо <a href="#maneuvers">приём</a>, вы можете заменить этот приём на другой. </li>
	</ul>
	</div>
<br>`,
    "дополнительная атака": `
<h3 class="underlined"><span id="feature.extra-attack">ДОПОЛНИТЕЛЬНАЯ АТАКА</span></h3>
<p><em>5-й уровень, умение воина</em></p>
<p>Если вы в свой ход совершаете действие Атака, вы можете совершить две атаки вместо одной.</p>
<p>Количество атак увеличивается до трёх на 11-м уровне этого класса, и до четырёх на 20-м уровне.</p>
<br>`,
    упорный: `
<h3 class="underlined"><span id="feature.indomitable">УПОРНЫЙ</span></h3>
<p><em>9-й уровень, умение воина</em></p>
<p>Вы можете перебросить проваленный спасбросок и должны использовать новый результат. После этого вы можете повторно использовать это умение только после завершения продолжительного отдыха.</p>
<p>Вы можете использовать это умение дважды между периодами продолжительного отдыха после достижения 13-го уровня, и трижды после достижения 17-го уровня.</p>
`,
  },
};
module.exports = details;
