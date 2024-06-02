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
      <td colspan="5">
        <span class="long">Ячейки заклинаний на уровень заклинаний</span
        ><span class="short tooltip tooltipstered">ячейки</span>
      </td>
    </tr>
    <tr class="table_header spell-slots-row">
      <td>1</td>
      <td>2</td>
      <td style="text-align: center">3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <td>1</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Божественное чувство</span>,
        <span class="tableAbility">Наложение рук</span>
      </td>
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
        <span class="tableAbility">Использование заклинаний</span>,
        <span class="tableAbility">Божественная кара</span><span class="TCE-feature-on" style="display: inline"
          >,
          <span class="tableAbility">Варианты боевых стилей</span></span
        >
      </td>
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
        <span class="tableAbility">Божественное здоровье</span>,
        <span class="tableAbility">Священная клятва</span><span class="TCE-feature-on" style="display: inline"
          >,
          <span class="tableAbility">Праведное восстановление</span></span
        >
      </td>
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
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on" style="display: inline"
          >,
          <span class="tableAbility">Универсальность воина</span></span
        >
      </td>
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
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>+3</td>
      <td><span class="tableAbility">Аура защиты</span></td>
      <td>4</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>+3</td>
      <td><span class="tableAbility">Умение священной клятвы</span></td>
      <td>4</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>+3</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>4</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>9</td>
      <td>+4</td>
      <td>-</td>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>+4</td>
      <td><span class="tableAbility">Аура отваги</span></td>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>11</td>
      <td>+4</td>
      <td>
        <span class="tableAbility">Улучшенная божественная кара</span>
      </td>
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
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>14</td>
      <td>+5</td>
      <td><span class="tableAbility">Очищающее касание</span></td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>+5</td>
      <td><span class="tableAbility">Умение священной клятвы</span></td>
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
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>18</td>
      <td>+6</td>
      <td><span class="tableAbility">Улучшения ауры</span></td>
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
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>20</td>
      <td>+6</td>
      <td><span class="tableAbility">Умение священной клятвы</span></td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
    </tr>
  </tbody>
</table>`,
};
