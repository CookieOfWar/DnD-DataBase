const table = {
  html: `
	<table class="class_table class_table_6" id="class-table">
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
      <td>
        <span class="long">Боевые<br />искусства</span
        ><span class="short tooltip tooltipstered">би</span>
      </td>
      <td>
        <span class="long">Очки<br />ци</span
        ><span class="short tooltip tooltipstered">ци</span>
      </td>
      <td>
        <span class="long">Скорость без<br />доспехов</span
        ><span class="short tooltip tooltipstered">бд</span>
      </td>
      <td>Умения</td>
    </tr>
    <tr>
      <td>1</td>
      <td>+2</td>
      <td>
        <span class="dice">1к4/span>
      </td>
      <td>—</td>
      <td>—</td>
      <td>
        <span class="tableAbility">Защита без доспехов</span>,
        <span class="tableAbility">Боевые искусства</span>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>+2</td>
      <td>
        <span class="dice">1к4/span>
      </td>
      <td>2</td>
      <td>+10 футов</td>
      <td>
        <span class="tableAbility">Движение без доспехов</span>,
        <span class="tableAbility">Ци</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Выбранное оружие</span></span
        >
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>+2</td>
      <td>
        <span class="dice">1к4/span>
      </td>
      <td>3</td>
      <td>+10 футов</td>
      <td>
        <span class="tableAbility">Монастырская традиция</span>,
        <span class="tableAbility">Отражение снарядов</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Атака, наделённая ци</span></span
        >
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>+2</td>
      <td>
        <span class="dice">1к4/span>
      </td>
      <td>4</td>
      <td>+10 футов</td>
      <td>
        <span class="tableAbility">Медленное падение</span>,
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Ускоренное исцеление</span></span
        >
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>+3</td>
      <td>
        <span class="dice">1к6/span>
      </td>
      <td>5</td>
      <td>+10 футов</td>
      <td>
        <span class="tableAbility">Дополнительная атака</span>,
        <span class="tableAbility">Ошеломляющий удар</span><span class="TCE-feature-on"
          >, <span class="tableAbility">Фокусировка на цели</span></span
        >
      </td>
    </tr>
    <tr>
      <td>6</td>
      <td>+3</td>
      <td>
        <span class="dice">1к6/span>
      </td>
      <td>6</td>
      <td>+15 футов</td>
      <td>
        <span class="tableAbility">Умение монастырской традиции</span>,
        <span class="tableAbility">Энергетические удары</span>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>+3</td>
      <td>
        <span class="dice">1к6/span>
      </td>
      <td>7</td>
      <td>+15 футов</td>
      <td>
        <span class="tableAbility">Спокойствие разума</span>,
        <span class="tableAbility">Увёртливость</span>
      </td>
    </tr>
    <tr>
      <td>8</td>
      <td>+3</td>
      <td>
        <span class="dice">1к6/span>
      </td>
      <td>8</td>
      <td>+15 футов</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
    </tr>
    <tr>
      <td>9</td>
      <td>+4</td>
      <td>
        <span class="dice">1к6/span>
      </td>
      <td>9</td>
      <td>+15 футов</td>
      <td>
        <span class="tableAbility">Улучшенное движение без доспехов</span>
      </td>
    </tr>
    <tr>
      <td>10</td>
      <td>+4</td>
      <td>
        <span class="dice">1к6/span>
      </td>
      <td>10</td>
      <td>+20 футов</td>
      <td><span class="tableAbility">Чистота тела</span></td>
    </tr>
    <tr>
      <td>11</td>
      <td>+4</td>
      <td>
        <span class="dice">1к8/span>
      </td>
      <td>11</td>
      <td>+20 футов</td>
      <td>
        <span class="tableAbility">Умение монастырской традиции</span>
      </td>
    </tr>
    <tr>
      <td>12</td>
      <td>+4</td>
      <td>
        <span class="dice">1к8/span>
      </td>
      <td>12</td>
      <td>+20 футов</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
    </tr>
    <tr>
      <td>13</td>
      <td>+5</td>
      <td>
        <span class="dice">1к8/span>
      </td>
      <td>13</td>
      <td>+20 футов</td>
      <td><span class="tableAbility">Язык солнца и луны</span></td>
    </tr>
    <tr>
      <td>14</td>
      <td>+5</td>
      <td>
        <span class="dice">1к8/span>
      </td>
      <td>14</td>
      <td>+25 футов</td>
      <td><span class="tableAbility">Алмазная душа</span></td>
    </tr>
    <tr>
      <td>15</td>
      <td>+5</td>
      <td>
        <span class="dice">1к8/span>
      </td>
      <td>15</td>
      <td>+25 футов</td>
      <td><span class="tableAbility">Безвременное тело</span></td>
    </tr>
    <tr>
      <td>16</td>
      <td>+5</td>
      <td>
        <span class="dice">1к8/span>
      </td>
      <td>16</td>
      <td>+25 футов</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
    </tr>
    <tr>
      <td>17</td>
      <td>+6</td>
      <td>
        <span class="dice">1к10/span>
      </td>
      <td>17</td>
      <td>+25 футов</td>
      <td>
        <span class="tableAbility">Умение монастырской традиции</span>
      </td>
    </tr>
    <tr>
      <td>18</td>
      <td>+6</td>
      <td>
        <span class="dice">1к10/span>
      </td>
      <td>18</td>
      <td>+30 футов</td>
      <td><span class="tableAbility">Пустое тело</span></td>
    </tr>
    <tr>
      <td>19</td>
      <td>+6</td>
      <td>
        <span class="dice">1к10/span>
      </td>
      <td>19</td>
      <td>+30 футов</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
    </tr>
    <tr>
      <td>20</td>
      <td>+6</td>
      <td>
        <span class="dice">1к10/span>
      </td>
      <td>20</td>
      <td>+30 футов</td>
      <td><span class="tableAbility">Совершенство</span></td>
    </tr>
  </tbody>
</table>`,
};
