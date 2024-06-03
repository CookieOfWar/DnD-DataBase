const details = {
  table: `
<table class="class_table class_table_4"><tbody>
<tr class="table_header">
<td rowspan="2"><span class="long">Уровень</span><span class="short tooltip tooltipstered">ур</span></td>
<td rowspan="2"><span class="long">Бонус<br/>мастерства</span><span class="short tooltip tooltipstered">бм</span></td>
<td rowspan="2"><span class="long">Единицы<br/>чародейства</span><span class="short tooltip tooltipstered">еч</span></td>
<td rowspan="2">Умения</td>
<td rowspan="2"><span class="long">Известные<br/>заговоры</span><span class="short tooltip tooltipstered">из</span></td>
<td rowspan="2"><span class="long">Известные<br/>заклинания</span><span class="short tooltip tooltipstered">иЗ</span></td>
<td colspan="9"><span class="long">Ячейки заклинаний на уровень заклинаний</span><span class="short tooltip tooltipstered">ячейки</span></td>
</tr>
<tr class="table_header spell-slots-row"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr><td>1</td><td>+2</td><td>-</td>
<td><span class="tableAbility">Происхождение чародея</span>, <span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Дополнительные заклинания</span></td>
<td>4</td><td>2</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>2</td><td>+2</td><td>2</td>
<td><a href="#feature.font-of-magic">Источник магии</a></td>
<td>4</td><td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>3</td><td>+2</td><td>3</td>
<td><span class="tableAbility">Метамагия</span>, <span class="tableAbility">Варианты метамагии</span></td>
<td>4</td><td>4</td><td>4</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>4</td><td>+2</td><td>4</td>
<td><span class="tableAbility">Увеличение характеристик</span><a href="#feature.sorcerous-versatility">, Универсальность чародея</a></td>
<td>5</td><td>5</td><td>4</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>5</td><td>+3</td><td>5</td>
<td><span class="tableAbility">Волшебное указание</span></td>
<td>5</td><td>6</td><td>4</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>6</td><td>+3</td><td>6</td>
<td><span class="tableAbility">Умение происхождения чародея</span></td>
<td>5</td><td>7</td><td>4</td><td>3</td><td>3</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>7</td><td>+3</td><td>7</td>
<td>-</td>
<td>5</td><td>8</td><td>4</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>8</td><td>+3</td><td>8</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>5</td><td>9</td><td>4</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>9</td><td>+4</td><td>9</td>
<td>-</td>
<td>5</td><td>10</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>10</td><td>+4</td><td>10</td>
<td><span class="tableAbility">Метамагия</span></td>
<td>6</td><td>11</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>11</td><td>+4</td><td>11</td>
<td>-</td>
<td>6</td><td>12</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>12</td><td>+4</td><td>12</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>6</td><td>12</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>13</td><td>+5</td><td>13</td>
<td>-</td>
<td>6</td><td>13</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>14</td><td>+5</td><td>14</td>
<td><span class="tableAbility">Умение происхождения чародея</span></td>
<td>6</td><td>13</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr><td>15</td><td>+5</td><td>15</td>
<td>-</td>
<td>6</td><td>14</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>16</td><td>+5</td><td>16</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>6</td><td>14</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-</td></tr>
<tr><td>17</td><td>+6</td><td>17</td>
<td><span class="tableAbility">Метамагия</span></td>
<td>6</td><td>15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>18</td><td>+6</td><td>18</td>
<td><span class="tableAbility">Умение происхождения чародея</span></td>
<td>6</td><td>15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>19</td><td>+6</td><td>19</td>
<td><span class="tableAbility">Увеличение характеристик</span></td>
<td>6</td><td>15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20</td><td>+6</td><td>20</td>
<td><span class="tableAbility">Чародейское восстановление</span></td>
<td>6</td><td>15</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
</tbody></table>
`,
  additionalInfo: `
<div class="additionalInfo"><h3 class="smallSectionTitle spoiler_head">Хиты, владение и снаряжение<span class="spoiler_head_button">свернуть</span></h3><span class="spoiler_body">
<h4 class="smallSectionTitle">ХИТЫ</h4>
<p><strong>Кость Хитов:</strong> <span class="dice"><span>1к6</span><span></span></span> за каждый уровень чародея</p>
<p><strong>Хиты на 1 уровне: </strong>6 + модификатор Телосложения</p>
<p><strong>Хиты на следующих уровнях:</strong> <span class="dice"><span>1к6</span><span></span></span> (или 4) + модификатор Телосложения (суммарно минимум 1) за каждый уровень чародея после первого</p>
<br/>
<h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
<p><strong>Доспехи: </strong>нет</p>
<p><strong>Оружие:</strong> <span class="additionalAbility">Боевые посохи</span>, <span class="additionalAbility">дротики</span>, <span class="additionalAbility">кинжалы</span>, <span class="additionalAbility">лёгкие арбалеты</span>, <span class="additionalAbility">пращи</span></p>
<p><strong>Инструменты: </strong>нет</p>
<p><strong>Спасброски:</strong> Телосложение, Харизма</p>
<p><strong>Навыки: </strong>Выберите два навыка из следующих: <span class="tooltipstered tooltip" tooltip-for="skill.intimidation">Запугивание</span>, <span class="tooltipstered tooltip" tooltip-for="skill.arcana">Магия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.deception">Обман</span>, <span class="tooltipstered tooltip" tooltip-for="skill.insight">Проницательность</span>, <span class="tooltipstered tooltip" tooltip-for="skill.religion">Религия</span>, <span class="tooltipstered tooltip" tooltip-for="skill.persuasion">Убеждение</span>.</p>
<br/>
<h4 class="smallSectionTitle">СНАРЯЖЕНИЕ</h4>
<p>Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному за вашу предысторию:</p>
<ul>
<li>а) <span class="additionalAbility">лёгкий арбалет</span> и <a href="https://dnd.su/articles/inventory/98-equipment/#equipment.bolt" target="_blank">20 болтов</a> или б) любое <span class="additionalAbility">простое оружие</span></li>
<li>а) <span class="additionalAbility">мешочек с компонентами</span> или б) <span class="additionalAbility">магическая фокусировка</span></li>
<li>а) <span class="tooltipstered tooltip" tooltip-for="item.pack.dungeoneer">набор исследователя подземелий</span> или б) <span class="tooltipstered tooltip" tooltip-for="item.pack.explorer">набор путешественника</span></li>
<li>Два <span class="additionalAbility">кинжала</span></li>
</ul>
<p>Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых вашей предысторией, то вы начнёте игру с <span class="dice"><span>3к4 × 10</span><span></span></span> зм для покупки снаряжения.</p>
</span></div>
`,
  explanations: {
    "происхождение чародея": `
	<h3 class="underlined"><span id="feature.sorcerous-origin">ПРОИСХОЖДЕНИЕ ЧАРОДЕЯ</span></h3>
	<p><em>1-й уровень, умение чародея</em></p>
	<p>Выберите источник, из которого ваш персонаж черпает свою силу. Все источники раскрыты <a href="#sorcerous-origins">ниже</a>.</p>
	<p>Ваш выбор предоставляет вам умения на 1-м, 6-м, 14-м и 18-м уровнях.</p>
	
	<br>
	`,
    "использование заклинаний": `
	<h3 class="underlined"><span id="feature.spellcasting">Использование заклинаний</span></h3>
	<p><em>1-й уровень, умение чародея</em></p>
	<p>Определённое событие в вашем прошлом или в жизни ваших родителей или предков оставило на вас неизгладимый отпечаток, связав вас с магией. Ваши заклинания питает некий источник магии, какого бы происхождения он не был. Вы найдёте список заклинаний, доступных чародею в этом разделе: <a href="/spells/?search=&amp;level=&amp;school=&amp;class=19&amp;concentration=&amp;source=">заклинания чародея</a>. Так же правила по использованию заклинаний есть в этой статье: <a href="/articles/mechanics/157-spellcasting/"><em> использование заклинаний</em></a>.</p>
	<h4 class="smallSectionTitle">Заговоры (заклинания 0-го уровня)</h4>
	<p>На 1-м уровне вам известны четыре <a href="/spells/?search=&amp;level=0&amp;school=&amp;class=19&amp;concentration=&amp;source="><strong>заговора</strong></a>, которые вы выбираете из списка заклинаний чародея. Вы обучаетесь дополнительным заговорам чародея на свой выбор по мере роста в уровнях, как это показано в колонке «Известные заговоры».</p>
	<h4 class="smallSectionTitle">Ячейки заклинаний</h4>
	<p>Таблица «Чародей» показывает, сколько ячеек заклинаний для сотворения заклинаний чародея у вас есть для заклинаний 1-го и других уровней. Для использования заклинания вы должны потратить ячейку соответствующего, либо превышающего уровня. Вы восстанавливаете все потраченные ячейки по окончании продолжительного отдыха.</p>
	<p>Например, если вы знаете заклинание 1-го уровня <a href="/spells/203-burning_hands/">огненные ладони [burning hands]</a>, и у вас есть ячейки 1-го и 2-го уровней, вы можете наложить его с помощью любой из этих ячеек.</p>
	<h4 class="smallSectionTitle">Известные заклинания первого и более высоких уровней</h4>
	<p>Вы знаете два заклинания 1-го уровня на свой выбор из списка заклинаний чародея.</p>
	<p>Колонка «Известные заклинания» показывает, когда вы сможете выучить новые заклинания. Уровень заклинаний не должен превышать уровень самой высокой имеющейся у вас ячейки заклинаний. Например, когда вы достигнете 3-го уровня в этом классе, вы можете выучить одно новое заклинание 1-го или 2-го уровня.</p>
	<p>Кроме того, когда вы получаете новый уровень в этом классе, вы можете одно из известных вам заклинаний чародея заменить на другое из списка чародея, уровень которого тоже должен соответствовать имеющимся ячейкам заклинаний.</p>
	<h4 class="smallSectionTitle">Базовая характеристика заклинаний</h4>
	<p>Вы используете Харизму для накладывания заклинаний чародея. Мощь заклинаний зависит от вашей способности проецировать свою волю в реальность. Вы используете Харизму в случаях, когда заклинание ссылается на базовую характеристику. Кроме того, вы используете Харизму при определении Сл спасбросков от ваших заклинаний, и при броске атаки заклинаниями.</p>
	<p style="text-align: center;"><strong>Сл спасброска</strong> = 8 + ваш бонус мастерства + ваш модификатор Харизмы</p>
	<p style="text-align: center;"><strong>Модификатор броска атаки</strong> = ваш бонус мастерства + ваш модификатор Харизмы</p>
	<h4 class="smallSectionTitle">Фокусировка заклинания</h4>
	<p>Вы можете использовать магическую фокусировку в качестве фокусировки для заклинаний чародея.</p>
	<div class="TCE-feature-on">
	<br>
	`,
    "дополнительные заклинания чародея": `
	<h3 class="underlined"><span id="feature.extra-spells">Дополнительные заклинания чародея</span></h3>
	<p><em>1-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение чародея</em></p>
	<p>Заклинания из представленного ниже списка расширяют ваш список заклинаний чародея представленный в «<em>Книге игрока</em>». Список отсортирован по уровню заклинаний, а не по уровню персонажа. Если заклинание может быть исполнено как ритуал, то в скобках также будет указано «ритуал».</p>
	<br><div class="table-wrapper"><table><tbody><tr class="table_header"><td>Уровень<br>заклинания</td><td>Заклинания</td></tr>
	<tr><td>Заговор</td><td><a href="/spells/461-sword_burst/">вспышка мечей [sword burst]</a>, <a href="/spells/458-booming_blade/">громовой клинок [booming blade]</a>, <a href="/spells/459-green_flame_blade/">клинок зеленого пламени [green-flame blade]</a>, <a href="/spells/460-lightning_lure/">лассо молнии [lightning lure]</a>, <a href="/spells/3050-mind_sliver/">расщепление разума [mind sliver]</a></td></tr>
	<tr><td>1</td><td><a href="/spells/3047-tasha_s_caustic_brew/">едкое варево Таши [Tasha’s caustic brew]</a>, <a href="/spells/315-grease/">скольжение [grease]</a></td></tr>
	<tr><td>2</td><td><a href="/spells/48-flame_blade/">горящий клинок [flame blade]</a>, <a href="/spells/153-magic_weapon/">магическое оружие [magic weapon]</a>, <a href="/spells/3053-tasha_s_mind_whip/">психическая плеть Таши [Tasha’s mind whip]</a>, <a href="/spells/289-flaming_sphere/">пылающий шар [flaming sphere]</a></td></tr>
	<tr><td>3</td><td><a href="/spells/3049-intellect_fortress/">крепость интеллекта [intellect fortress]</a>, <a href="/spells/277-vampiric_touch/">прикосновение вампира [vampiric touch]</a></td></tr>
	<tr><td>4</td><td><a href="/spells/206-fire_shield/">огненный щит [fire shield]</a></td></tr>
	<tr><td>5</td><td><a href="/spells/57-bigby_s_hand/">длань Бигби [Bigby’s hand]</a></td></tr>
	<tr><td>6</td><td><a href="/spells/209-flesh_to_stone/">окаменение [flesh to stone]</a>, <a href="/spells/215-otiluke_s_freezing_sphere/">Отилюков ледяной шар [Otiluke’s freezing sphere]</a>, <a href="/spells/3052-tasha_s_otherworldly_guise/">потусторонний облик Таши [Tasha’s otherwordly guise]</a></td></tr>
	<tr><td>7</td><td><a href="/spells/3054-dream_of_the_blue_veil/">сон синей вуали [dream of the blue veil]</a></td></tr>
	<tr><td>8</td><td><a href="/spells/55-demiplane/">демиплан [demiplane]</a></td></tr>
	<tr><td>9</td><td><a href="/spells/3048-blade_of_disaster/">клинок разрушения [blade of disaster]</a></td></tr>
	</tbody></table></div>
	</div>
	
	<br>
	`,
    "источник магии": `
	<h3 class="underlined"><span id="feature.font-of-magic">ИСТОЧНИК МАГИИ</span></h3>
	<p><em>2-й уровень, умение чародея</em></p>
	<p>Вы получаете доступ к внутреннему источнику магии. Этот источник выражен в единицах чародейства, позволяющих вам создавать разнообразные магические эффекты.</p>
	<h4 class="smallSectionTitle">Единицы чародейства</h4>
	<p>Вы получаете 2 единицы чародейства, и их становится больше на более высоких уровнях. У вас не может быть этих единиц больше, чем указанно в таблице для вашего уровня. Вы восстанавливаете все использованные единицы чародейства по окончании продолжительного отдыха.</p>
	<h4 class="smallSectionTitle">Свободное заклинательство</h4>
	<p>Вы можете использовать единицы чародейства, чтобы получить дополнительные ячейки заклинаний, и наоборот, пожертвовать ячейками, чтобы получить единицы. Другие способы использования единиц чародейства вы освоите на более высоких уровнях.</p>
	<p><strong><em>Преобразование ячейки заклинания в единицы чародейства.</em></strong> Вы можете в свой ход бонусным действием преобразовать одну ячейку заклинаний в единицы чародейства, количество которых равно уровню ячейки.</p>
	<p><strong><em>Создание ячеек заклинаний</em>. </strong>В свой ход вы можете бонусным действием превратить оставшиеся единицы чародейства в дополнительные ячейки заклинаний. Приведённая таблица отображает стоимость создания ячеек разных уровней. Вы не можете создавать ячейки с уровнем выше 5. Созданные ячейки заклинаний исчезают в конце длительного отдыха.</p>
	<h4 class="tableTitle">СОЗДАНИЕ ЯЧЕЕК ЗАКЛИНАНИЙ</h4>
	<div class="table-wrapper"><table><tbody>
	<tr class="table_header"><td>Уровень ячеек<br>заклинаний</td><td>Единицы<br>чародейства</td></tr>
	<tr><td>1</td><td>2</td></tr>
	<tr><td>2</td><td>3</td></tr>
	<tr><td>3</td><td>5</td></tr>
	<tr><td>4</td><td>6</td></tr>
	<tr><td>5</td><td>7</td></tr>
	</tbody></table></div>
	
	<br>
	`,
    метамагия: `
	<h3 class="underlined"><span id="feature.metamagic">Метамагия</span></h3>
	<p><em>3-й уровень, умение чародея</em></p>
	<p>Вы получаете способность подстраивать заклинания под свои нужды. Вы выбираете два варианта метамагии из перечисленных ниже. На 10-м и 17-м уровне вы получаете ещё по одному варианту.</p>
	<p>При накладывании заклинания может быть использован только один метамагический вариант, если в его описании не указано обратное.</p>
	
	<h4 class="smallSectionTitle">Аккуратное заклинание</h4>
	<p>Когда вы накладываете заклинание, которое вынуждает других существ совершить спасбросок, вы можете защитить некоторых из них от магического воздействия. Для этого вы тратите 1 единицу чародейства и выбираете существ в количестве, равном вашему модификатору Харизмы (минимум одно существо). Указанные существа автоматически преуспевают в спасброске от данного заклинания.</p>
	<h4 class="smallSectionTitle">Далёкое заклинание</h4>
	<p>При накладывании заклинания, дистанция которого 5 футов и более, вы можете потратить 1 единицу чародейства, чтобы удвоить это расстояние.</p>
	<p>При накладывании заклинания с дистанцией «касание», вы можете потратить 1 единицу чародейства, чтобы увеличить это расстояние до 30 футов.</p>
	<h4 class="smallSectionTitle">Непреодолимое заклинание</h4>
	<p>Когда вы накладываете заклинание, которое вынуждает существо совершить спасбросок для защиты от его эффектов, вы можете потратить 3 единицы чародейства, чтобы одна из целей заклинания совершила первый спасбросок от этого заклинания с помехой.</p>
	<h4 class="smallSectionTitle">Неуловимое заклинание</h4>
	<p>Во время накладывания заклинания вы можете потратить 1 единицу чародейства, чтоб наложить его без вербальных и соматических компонентов.</p>
	<h4 class="smallSectionTitle">Продлённое заклинание</h4>
	<p>При накладывании заклинания с длительностью 1 минута или более, вы можете потратить 1 единицу чародейства, чтобы удвоить это время, вплоть до максимального в 24 часа.</p>
	<h4 class="smallSectionTitle"><span id="metamagic.double">Удвоенное заклинание</span></h4>
	<p>Если вы используете заклинание, нацеливаемое только на одно существо и не имеющее дистанцию «на себя», вы можете потратить количество единиц чародейства, равное уровню заклинания (1 для заговоров), чтобы нацелиться им на второе существо-цель в пределах дистанции этого заклинания.</p><p>Чтобы применить этот вариант, заклинание не должно быть способно нацеливаться более чем на одну цель на текущем накладываемом уровне. Например, <a href="/spells/27-magic_missile/">волшебная стрела [magic missile]</a> и <a href="/spells/225-scorching_ray/">палящий луч [scorching ray]</a> не могут быть усилены этой метамагией, а <a href="/spells/149-ray_of_frost/">луч холода [ray of frost]</a> и <a href="/spells/86-chromatic_orb/">цветной шарик [chromatic orb]</a>&nbsp;— могут.<br></p>
	<h4 class="smallSectionTitle"><span id="metamagic.fast">Усиленное заклинание</span></h4>
	<p>При совершении броска урона от заклинания вы можете потратить 1 единицу чародейства, чтобы перебросить несколько костей урона в количестве не больше вашего модификатора Харизмы (минимум одна). Вы должны использовать новое выпавшее значение.</p>
	<p>Вы можете воспользоваться вариантом «усиленное заклинание» даже если вы уже использовали другой вариант метамагии для этого заклинания.</p>
	<h4 class="smallSectionTitle">Ускоренное заклинание</h4>
	<p>Если вы накладываете заклинание со временем накладывания «1 действие», вы можете потратить 2 единицы чародейства, чтобы наложить это заклинание бонусным действием.</p>
	<div class="TCE-feature-on">
	<h4 class="smallSectionTitle"><span id="feature.metamagic-options">Ищущее заклинание</span></h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">Опциональный</span> вариант метамагии</em></p>
	<p>Если вы совершаете бросок атаки для заклинания и промахиваетесь, вы можете потратить 2 единицы чародейства, чтобы перебросить к20, и должны использовать новый бросок. Вы можете использовать это умение, даже если вы уже использовали другой вариант метамагии во время накладывания заклинания.</p>
	<h4 class="smallSectionTitle">Преобразованное заклинание</h4>
	<p><em><span tooltip-for="option.TCE" class="tooltipstered tooltip">Опциональный</span> вариант метамагии</em></p>
	<p>Когда вы накладываете заклинание, которое наносит тип урона из перечисленного списка, вы можете потратить 1 единицу чародейства и изменить этот тип урона на другой из следующих: звук, кислота, огонь, холод, электричество, яд.</p>
	</div>
	
	<br>
	`,
    "увеличение характеристик": `
	<h3 class="underlined"><span id="feature.ASI">УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК</span></h3>
	<p><em>4-й уровень, умение чародея</em></p>
	<p>При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превысить 20.</p>
	<p>Если ваш Мастер разрешает использование черт, вы можете отказаться от преимуществ этого умения при повышении значений характеристик и вместо этого взять <a href="/feats/">черту</a>.</p>
	<div class="TCE-feature-on">
	<br>
	`,
    "универсальность чародея": `
	<h3 class="underlined"><span id="feature.sorcerous-versatility">Универсальность чародея</span></h3>
	<p><em>4-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение чародея</em></p>
	<p>Каждый раз, когда вы достигаете определённого уровня в этом классе и получаете умение «Увеличение характеристик», вы можете сделать одно из следующих действий, отражающих изменения в том, как магия течёт внутри вас:</p>
	<ul>
	<li>Замените один из ваших метамагических вариантов другим доступным вам. </li>
	<li>Замените один заговор, который вы узнали благодаря умению «Использование заклинаний» этого класса, другим заговором из списка заклинаний чародея. </li>
	</ul>
	</div>
	<div class="TCE-feature-on">
	<br>
	`,
    "волшебное указание": `
	<h3 class="underlined"><span id="feature.magical-guidance">Волшебное указание</span></h3>
	<p><em>5-й уровень, <span tooltip-for="option.TCE" class="tooltipstered tooltip">опциональное</span> умение чародея</em></p>
	<p>Вы можете использовать свой внутренний источник магии, чтобы попытаться обратить неудачу в успех. Когда вы совершаете проверку характеристики и проваливаете её, вы можете потратить 1 единицу чародейства, чтобы перебросить к20, потенциально превращая провал в успех, но должны использовать новый бросок.</p>
	</div>
	
	<br>
	`,
    "чародейское восстановление": `
	<h3 class="underlined"><span id="feature.sorcerous-restoration">ЧАРОДЕЙСКОЕ ВОССТАНОВЛЕНИЕ</span></h3>
	<p><em>20-й уровень, умение чародея</em></p>
	<p>Вы восстанавливаете 4 единицы чародейства, когда заканчиваете короткий отдых.</p>
	`,
  },
};
module.exports = details;
