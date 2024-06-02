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
        <span class="long" style="">Известные<br />заговоры</span
        ><span class="short tooltip tooltipstered">из</span>
      </td>
      <td rowspan="2">
        <span class="long">Известные<br />заклинания</span
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
        <span class="tableAbility">Использование заклинаний</span>, <span class="tableAbility">Дополнительные заклинания</span>,
        <span class="tableAbility">Вдохновение барда (к6)</span>
      </td>
      <td style="">2</td>
      <td style="">4</td>
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
      <td>
        <span class="tableAbility">Мастер на все руки</span>,
        <span class="tableAbility">Песнь отдыха (к6)</span><span class="TCE-feature-on" style="display: inline"
          >,
          <span class="tableAbility">Магическое вдохновение</span></span
        >
      </td>
      <td>2</td>
      <td>5</td>
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
      <td>
        <span class="tableAbility">Коллегия бардов</span>,
        <span class="tableAbility">Компетентность</span>
      </td>
      <td style="">2</td>
      <td style="">6</td>
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
      <td>
        <span class="tableAbility">Увеличение характеристик</span><span class="TCE-feature-on" style="display: inline"
          >,
          <span class="tableAbility">Многогранность барда</span></span
        >
      </td>
      <td>3</td>
      <td>7</td>
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
      <td>
        <span class="tableAbility">Вдохновение барда (к8)</span>,
        <span class="tableAbility">Источник вдохновения</span>
      </td>
      <td style="">3</td>
      <td style="">8</td>
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
      <td>
        <span class="tableAbility">Контрочарование</span>,
        <span class="tableAbility">Умение коллегии бардов</span>
      </td>
      <td>3</td>
      <td>9</td>
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
      <td>-</td>
      <td>3</td>
      <td>10</td>
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
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>3</td>
      <td>11</td>
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
      <td><span class="tableAbility">Песнь отдыха (к8)</span></td>
      <td style="">3</td>
      <td style="">12</td>
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
      <td>
        <span class="tableAbility">Вдохновение барда (к10)</span>,
        <span class="tableAbility">Компетентность</span>,
        <span class="tableAbility">Тайны магии</span>
      </td>
      <td style="">4</td>
      <td style="">14</td>
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
    <tr style="">
      <td style="">11</td>
      <td style="">+4</td>
      <td style="">-</td>
      <td style="">4</td>
      <td style="">15</td>
      <td style="">4</td>
      <td style="">3</td>
      <td style="">3</td>
      <td style="">3</td>
      <td style="">2</td>
      <td style="">1</td>
      <td style="">-</td>
      <td style="">-</td>
      <td style="">-</td>
    </tr>
    <tr>
      <td>12</td>
      <td>+4</td>
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td style="">4</td>
      <td style="">15</td>
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
      <td><span class="tableAbility">Песнь отдыха (к10)</span></td>
      <td style="">4</td>
      <td style="">16</td>
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
      <td>
        <span class="tableAbility">Тайны магии</span>,
        <span class="tableAbility">Умение коллегии бардов</span>
      </td>
      <td>4</td>
      <td>18</td>
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
      <td><span class="tableAbility">Вдохновение барда (к12)</span></td>
      <td>4</td>
      <td>19</td>
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
      <td><span class="tableAbility">Увеличение характеристик</span></td>
      <td>4</td>
      <td>19</td>
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
      <td><span class="tableAbility">Песнь отдыха (к12)</span></td>
      <td>4</td>
      <td>20</td>
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
      <td><span class="tableAbility">Тайны магии</span></td>
      <td>4</td>
      <td>22</td>
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
      <td>4</td>
      <td>22</td>
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
        <span class="tableAbility">Превосходное вдохновение</span>
      </td>
      <td>4</td>
      <td>22</td>
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
  additionalInfo: `
<span class="spoiler_body">
  <h4 class="smallSectionTitle" style="">ХИТЫ</h4>
  <p style="">
    <strong>Кость Хитов:</strong>
    <span class="dice" onclick="return ROLLtABLE.rollDice(this);"
      ><span>1к8</span><span></span
    ></span>
    за каждый уровень барда
  </p>
  <p style="">
    <strong>Хиты на 1 уровне:</strong> 8 + модификатор Телосложения
  </p>
  <p style="">
    <strong>Хиты на следующих уровнях:</strong>
    <span class="dice" onclick="return ROLLtABLE.rollDice(this);"
      ><span>1к8</span><span></span
    ></span>
    (или 5) + модификатор Телосложения (суммарно минимум 1) за каждый уровень
    барда после первого
  </p>

  <br />
  <h4 class="smallSectionTitle">ВЛАДЕНИЕ</h4>
  <p>
    <strong>Доспехи:</strong>
    <a
      href="https://dnd.su/articles/inventory/95-armor_and_shields/#armor.light"
      target="_blank"
      >Лёгкие доспехи</a
    >
  </p>
  <p>
    <strong>Оружие: </strong
    ><a
      href="https://dnd.su/articles/inventory/96-arms/#weapon.simple"
      target="_blank"
      >Простое оружие</a
    ><a
      href="https://dnd.su/articles/inventory/96-arms/#weapon.simple"
      target="_blank"
    ></a
    >,
    <a
      href="https://dnd.su/articles/inventory/96-arms/#weapon.longsword"
      target="_blank"
      >длинные мечи</a
    >,
    <a
      href="https://dnd.su/articles/inventory/96-arms/#weapon.shortsword"
      target="_blank"
      >короткие мечи</a
    >,
    <a
      href="https://dnd.su/articles/inventory/96-arms/#weapon.rapier"
      target="_blank"
      >рапиры</a
    >,
    <a
      href="https://dnd.su/articles/inventory/96-arms/#weapon.crossbow-hand"
      target="_blank"
      >ручные арбалеты</a
    >
  </p>
  <p>
    <strong>Инструменты:</strong> Три
    <a href="/articles/inventory/100-tools/#Музыкальные"
      >музыкальных инструмента</a
    >
    на ваш выбор
  </p>
  <p><strong>Спасброски:</strong> Ловкость, Харизма</p>
  <p><strong>Навыки:</strong> Выберите три любых</p>

  <br />
  <h4 class="smallSectionTitle" style="">СНАРЯЖЕНИЕ</h4>
  <p>
    Вы начинаете со следующим снаряжением в дополнение к снаряжению, полученному
    за вашу предысторию:
  </p>
  <ul>
    <li>
      а)
      <a
        href="https://dnd.su/articles/inventory/96-arms/#weapon.rapier"
        target="_blank"
        >рапира</a
      >, б)
      <a
        href="https://dnd.su/articles/inventory/96-arms/#weapon.longsword"
        target="_blank"
        >длинный меч</a
      >
      или в) любое
      <a
        href="https://dnd.su/articles/inventory/96-arms/#weapon.simple"
        target="_blank"
        >простое оружие</a
      >
    </li>
    <li>
      а)
      <span tooltip-for="item.pack.diplomat" class="tooltipstered tooltip"
        >набор дипломата</span
      >
      или б)
      <span tooltip-for="item.pack.entertainer" class="tooltipstered tooltip"
        >набор артиста</span
      >
    </li>
    <li>
      а)
      <a
        href="https://dnd.su/articles/inventory/100-tools/#tool.musican.lute"
        target="_blank"
        >лютня</a
      >
      или б) любой другой
      <span tooltip-for="tools.music" class="tooltipstered tooltip"
        >музыкальный инструмент</span
      >
    </li>
    <li>
      <a
        href="https://dnd.su/articles/inventory/95-armor_and_shields/#armor.leather"
        target="_blank"
        >Кожаный доспех</a
      >
      и
      <a
        href="https://dnd.su/articles/inventory/96-arms/#weapon.dagger"
        target="_blank"
        >кинжал</a
      >
    </li>
  </ul>
  <p>
    Если вы откажетесь от этого снаряжения, а также от предметов, предлагаемых
    вашей предысторией, то вы начнёте игру с
    <span class="dice" onclick="return ROLLtABLE.rollDice(this);"
      ><span>5к4×10</span><span></span
    ></span>
    зм для покупки снаряжения.
  </p>
</span>`,
};
