const table = {
  html: `
	<table class="class_table">
  <tbody>
    <tr class="table_header">
      <td rowspan="2">
        <span class="long">Уровень</span
        ><span class="short tooltip tooltipstered">ур</span>
      </td>
      <td rowspan="2">
        <span class="long">Бонус<br />мастерства</span
        ><span class="short tooltip tooltipstered">бм</span>
      </td>
      <td rowspan="2">Умения</td>
      <td rowspan="2">
        <span class="long">Известные<br />заклинания</span
        ><span class="short tooltip tooltipstered">из</span>
      </td>
      <td colspan="5">
        <span class="long">Ячейки заклинаний на уровень заклинаний</span
        ><span class="short tooltip tooltipstered">ячейки</span>
      </td>
    </tr>
    <tr class="table_header spell-slots-row">
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <td>1</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Избранный враг</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Предпочтительный противник</span></span
        >, <span class="tableAbility">Исследователь природы</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Искусный исследователь</span></span
        >
      </td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Боевой стиль</span>,
        <span class="tableAbility">Использование заклинаний</span><span class="TCE-feature-on"
          >,
          <span class="tableAbility">Заклинательная фокусировка</span></span
        >
      </td>
      <td>2</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Архетип следопыта</span>,
        <span class="tableAbility">Первозданная осведомлённость</span><span class="TCE-feature-on"
          >,
          <span class="tableAbility">Изначальная осведомлённость</span></span
        >
      </td>
      <td>3</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on"
          >,
          <span class="tableAbility">Универсальность воина</span></span
        >
      </td>
      <td>3</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>+3</td>
      <td><span class="tableAbility">Дополнительная атака</span></td>
      <td>4</td>
      <td>4</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>+3</td>
      <td>
        Улучшение <span class="tableAbility">избранного врага</span><span class="TCE-feature-on"
          >, <span class="tableAbility">искусного исследователя</span></span
        >
        и <span class="tableAbility">исследователя природы</span>
      </td>
      <td>4</td>
      <td>4</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>+3</td>
      <td><span class="tableAbility">Умение архетипа следопыта</span></td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td style="">8</td>
      <td style="">+3</td>
      <td>
        <span class="tableAbility">Увеличение характеристик</span>,
        <span class="tableAbility">Тропами земли</span>
      </td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr style="">
      <td style="">9</td>
      <td style="">+4</td>
      <td style="">-</td>
      <td style="">6</td>
      <td style="">4</td>
      <td style="">3</td>
      <td style="">2</td>
      <td style="">-</td>
      <td style="">-</td>
    </tr>
    <tr style="">
      <td style="">10</td>
      <td style="">+4</td>
      <td style="">
        Улучшение <span class="tableAbility">исследователя природы</span>,
        <span class="tableAbility">Маскировка на виду</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Природная завеса</span></span
        >
      </td>
      <td style="">6</td>
      <td style="">4</td>
      <td style="">3</td>
      <td style="">2</td>
      <td style="">-</td>
      <td style="">-</td>
    </tr>
    <tr>
      <td>11</td>
      <td>+4</td>
      <td><span class="tableAbility">Умение архетипа следопыта</span></td>
      <td>7</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>12</td>
      <td>+4</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>7</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>13</td>
      <td>+5</td>
      <td>-</td>
      <td>8</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>14</td>
      <td>+5</td>
      <td>
        Улучшение <span class="tableAbility">избранного врага</span>,
        <span class="tableAbility">Исчезновение</span>
      </td>
      <td>8</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>+5</td>
      <td><span class="tableAbility">Умение архетипа следопыта</span></td>
      <td>9</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>+5</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>9</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
    </tr>
    <tr>
      <td>17</td>
      <td>+6</td>
      <td>-</td>
      <td>10</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>18</td>
      <td>+6</td>
      <td><span class="tableAbility">Дикие чувства</span></td>
      <td>10</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>19</td>
      <td>+6</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>11</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>20</td>
      <td>+6</td>
      <td><span class="tableAbility">Убийца врагов</span></td>
      <td>11</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
    </tr>
  </tbody>
</table>`,
};
