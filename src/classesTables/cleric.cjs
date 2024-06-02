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
        <span class="long">Известные<br />заговоры</span
        ><span class="short tooltip tooltipstered">из</span>
      </td>
      <td colspan="9">
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
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <td>1</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Использование заклинаний</span>,
        <span class="tableAbility">Божественный домен</span>
      </td>
      <td>3</td>
      <td>2</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>2</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Божественный канал (1/отдых)</span>,
        <span class="tableAbility">Умение божественного домена</span><span class="TCE-feature-on"
          >,
          <span class="tableAbility">Праведное восстановление</span></span
        >
      </td>
      <td>3</td>
      <td>3</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>3</td>
      <td>+2</td>
      <td>—</td>
      <td>3</td>
      <td>4</td>
      <td>2</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>4</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on"
          >,
          <span class="tableAbility">Универсальность заговоров</span></span
        >
      </td>
      <td>4</td>
      <td>4</td>
      <td>3</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>5</td>
      <td>+3</td>
      <td><span class="tableAbility">Уничтожение Нежити (ПО ½)</span></td>
      <td>4</td>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td style="">6</td>
      <td style="">+3</td>
      <td>
        <span class="tableAbility">Божественный канал (2/отдых)</span>, <span class="tableAbility">Умение божественного домена</span>
      </td>
      <td>4</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>7</td>
      <td>+3</td>
      <td>—</td>
      <td>4</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>8</td>
      <td>+3</td>
      <td>
        <span class="tableAbility">Увеличение характеристик</span>,
        <span class="tableAbility">Уничтожение Нежити (ПО 1)</span>,
        <span class="TCE-feature-off" style="display: none"
          ><span class="tableAbility">Умение божественного домена</span></span
        ><span class="TCE-feature-on"
          ><span class="tableAbility">Благословленные удары</span></span
        >
      </td>
      <td>4</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>9</td>
      <td>+4</td>
      <td>—</td>
      <td>4</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td style="">10</td>
      <td style="">+4</td>
      <td>
        <span class="tableAbility">Божественное вмешательство</span>
      </td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>11</td>
      <td>+4</td>
      <td><span class="tableAbility">Уничтожение Нежити (ПО 2)</span></td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>12</td>
      <td>+4</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>13</td>
      <td>+5</td>
      <td>—</td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>14</td>
      <td>+5</td>
      <td><span class="tableAbility">Уничтожение Нежити (ПО 3)</span></td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>15</td>
      <td>+5</td>
      <td>—</td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>—</td>
    </tr>
    <tr>
      <td>16</td>
      <td>+5</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>—</td>
    </tr>
    <tr>
      <td>17</td>
      <td>+6</td>
      <td>
        <span class="tableAbility">Уничтожение Нежити (ПО 4)</span>,
        <span class="tableAbility">Умение божественного домена</span>
      </td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>18</td>
      <td>+6</td>
      <td>
        <span class="tableAbility">Божественный канал (3/отдых)</span>
      </td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>19</td>
      <td>+6</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>20</td>
      <td>+6</td>
      <td>
        <span class="tableAbility">Улучшение божественного вмешательства</span>
      </td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>`,
};
