const table = {
  html: `
	<table class="class_table">
  <tbody>
    <tr class="table_header">
      <td>
        <span class="long">Уровень</span
        ><span class="short tooltip tooltipstered">ур</span>
      </td>
      <td>
        <span class="long">Бонус<br />мастерства</span
        ><span class="short tooltip tooltipstered">бм</span>
      </td>
      <td>Умения</td>
      <td>
        <span class="long">Известные<br />заговоры</span
        ><span class="short tooltip tooltipstered">из</span>
      </td>
      <td>
        <span class="long">Известные<br />заклинания</span
        ><span class="short tooltip tooltipstered">иЗ</span>
      </td>
      <td>
        <span class="long">Ячейки<br />заклинаний</span
        ><span class="short tooltip tooltipstered">яЗ</span>
      </td>
      <td>
        <span class="long">Уровень<br />ячеек</span
        ><span class="short tooltip tooltipstered">уя</span>
      </td>
      <td>
        <span class="long">Известные<br />воззвания</span
        ><span class="short tooltip tooltipstered">ив</span>
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Потусторонний покровитель</span>,
        <span class="tableAbility">Магия договора</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Дополнительные заклинания</span></span
        >
      </td>
      <td>2</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Таинственные воззвания</span>
      </td>
      <td>2</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Предмет договора</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Вариант договора</span></span
        >
      </td>
      <td>2</td>
      <td>4</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>4</td>
      <td>+2</td>
      <td>
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on"
          >,
          <span class="tableAbility">Мистическая универсальность</span></span
        >
      </td>
      <td>3</td>
      <td>5</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>5</td>
      <td>+3</td>
      <td>-</td>
      <td>3</td>
      <td>6</td>
      <td>2</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>6</td>
      <td>+3</td>
      <td><span class="tableAbility">Умение покровителя</span></td>
      <td>3</td>
      <td>7</td>
      <td>2</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>7</td>
      <td>+3</td>
      <td>-</td>
      <td>3</td>
      <td>8</td>
      <td>2</td>
      <td>4</td>
      <td>4</td>
    </tr>
    <tr>
      <td>8</td>
      <td>+3</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>3</td>
      <td>9</td>
      <td>2</td>
      <td>4</td>
      <td>4</td>
    </tr>
    <tr>
      <td>9</td>
      <td>+4</td>
      <td>-</td>
      <td>3</td>
      <td>10</td>
      <td>2</td>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <td>10</td>
      <td>+4</td>
      <td><span class="tableAbility">Умение покровителя</span></td>
      <td>4</td>
      <td>10</td>
      <td>2</td>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <td>11</td>
      <td>+4</td>
      <td>
        <span class="tableAbility">Таинственный арканум (6 уровень)</span>
      </td>
      <td>4</td>
      <td>11</td>
      <td>3</td>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <td>12</td>
      <td>+4</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>4</td>
      <td>11</td>
      <td>3</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>13</td>
      <td>+5</td>
      <td>
        <span class="tableAbility">Таинственный арканум (7 уровень)</span>
      </td>
      <td>4</td>
      <td>12</td>
      <td>3</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>14</td>
      <td>+5</td>
      <td><span class="tableAbility">Умение покровителя</span></td>
      <td>4</td>
      <td>12</td>
      <td>3</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>15</td>
      <td>+5</td>
      <td>
        <span class="tableAbility">Таинственный арканум (8 уровень)</span>
      </td>
      <td>4</td>
      <td>13</td>
      <td>3</td>
      <td>5</td>
      <td>7</td>
    </tr>
    <tr>
      <td>16</td>
      <td>+5</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>4</td>
      <td>13</td>
      <td>3</td>
      <td>5</td>
      <td>7</td>
    </tr>
    <tr>
      <td>17</td>
      <td>+6</td>
      <td>
        <span class="tableAbility">Таинственный арканум (9 уровень)</span>
      </td>
      <td>4</td>
      <td>14</td>
      <td>4</td>
      <td>5</td>
      <td>7</td>
    </tr>
    <tr>
      <td>18</td>
      <td>+6</td>
      <td>-</td>
      <td>4</td>
      <td>14</td>
      <td>4</td>
      <td>5</td>
      <td>8</td>
    </tr>
    <tr>
      <td>19</td>
      <td>+6</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>4</td>
      <td>15</td>
      <td>4</td>
      <td>5</td>
      <td>8</td>
    </tr>
    <tr>
      <td>20</td>
      <td>+6</td>
      <td><span class="tableAbility">Таинственный мастер</span></td>
      <td>4</td>
      <td>15</td>
      <td>4</td>
      <td>5</td>
      <td>8</td>
    </tr>
  </tbody>
</table>`,
};
