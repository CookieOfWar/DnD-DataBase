const table = {
  html: `
	<table class="class_table class_table_4">
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
      <td rowspan="2">
        <span class="long">Единицы<br />чародейства</span
        ><span class="short tooltip tooltipstered">еч</span>
      </td>
      <td rowspan="2">Умения</td>
      <td rowspan="2">
        <span class="long">Известные<br />заговоры</span
        ><span class="short tooltip tooltipstered">из</span>
      </td>
      <td rowspan="2">
        <span class="long">Известные<br />заклинания</span
        ><span class="short tooltip tooltipstered">иЗ</span>
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
      <td>-</td>
      <td>
        <span class="tableAbility">Происхождение чародея</span>,
        <span class="tableAbility">Использование заклинаний</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Дополнительные заклинания</span></span
        >
      </td>
      <td>4</td>
      <td>2</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
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
      <td>2</td>
      <td><span class="tableAbility">Источник магии</span></td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>+2</td>
      <td>3</td>
      <td>
        <span class="tableAbility">Метамагия</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Варианты метамагии</span></span
        >
      </td>
      <td>4</td>
      <td>4</td>
      <td>4</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>+2</td>
      <td>4</td>
      <td>
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on"
          ><span class="tableAbility">, Универсальность чародея</span></span
        >
      </td>
      <td>5</td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>+3</td>
      <td>5</td>
      <td>
        <span class="TCE-feature-on"
          ><span class="tableAbility">Волшебное указание</span></span
        >
      </td>
      <td>5</td>
      <td>6</td>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>+3</td>
      <td>6</td>
      <td>
        <span class="tableAbility">Умение происхождения чародея</span>
      </td>
      <td>5</td>
      <td>7</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>+3</td>
      <td>7</td>
      <td>-</td>
      <td>5</td>
      <td>8</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>+3</td>
      <td>8</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>5</td>
      <td>9</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>9</td>
      <td>+4</td>
      <td>9</td>
      <td>-</td>
      <td>5</td>
      <td>10</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>+4</td>
      <td>10</td>
      <td><span class="tableAbility">Метамагия</span></td>
      <td>6</td>
      <td>11</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>11</td>
      <td>+4</td>
      <td>11</td>
      <td>-</td>
      <td>6</td>
      <td>12</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>12</td>
      <td>+4</td>
      <td>12</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>6</td>
      <td>12</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>13</td>
      <td>+5</td>
      <td>13</td>
      <td>-</td>
      <td>6</td>
      <td>13</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>14</td>
      <td>+5</td>
      <td>14</td>
      <td>
        <span class="tableAbility">Умение происхождения чародея</span>
      </td>
      <td>6</td>
      <td>13</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>+5</td>
      <td>15</td>
      <td>-</td>
      <td>6</td>
      <td>14</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>+5</td>
      <td>16</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>6</td>
      <td>14</td>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>17</td>
      <td>+6</td>
      <td>17</td>
      <td><span class="tableAbility">Метамагия</span></td>
      <td>6</td>
      <td>15</td>
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
      <td>18</td>
      <td>
        <span class="tableAbility">Умение происхождения чародея</span>
      </td>
      <td>6</td>
      <td>15</td>
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
      <td>19</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>6</td>
      <td>15</td>
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
      <td>20</td>
      <td>
        <span class="tableAbility">Чародейское восстановление</span>
      </td>
      <td>6</td>
      <td>15</td>
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
