## Задание №2. Анализ кода
<hr>

static int Func1(KeyValuePair<int, string>[] a, int low, int high, int key)<br>
{<br>
  int middle = low + ((high - low)/2);
 
  if (low == high)
    return low;
 
  if (key > a[middle].Key)
    return Func1(a, middle + 1, high, key);
 
  return Func1(a, low, middle, key);<br>
}

 
**Func1** - функция, выполняющая бинарный поиск в заданном диапазоне. Возвращает индекс найденной позиции. 
- a - массив, в котором выполняется поиск
- low - наименьший индекс диапазона
- high - максимальный индекс диапазона
- key - ключ, определяющий нужную позицию
>  int middle = low + ((high - low)/2);
 - Вычисляет среднее число от которого будет зависеть выбор позиции следующего этапа поиска

>  if (low == high)
    return low;
- Если минимальный и максимальный индексы равны, возвращает их значение в качестве финального результата поиска

>  if (key > a[middle].Key)
    return Func1(a, middle + 1, high, key);
- Если ключ больше среднего числа, оно становится новым наименьшим индексом поиска. Начинается новая итерация.

> return Func1(a, low, middle, key);
- Если ключ меньше среднего числа, оно становится новым наибольшим индексом поиска. Начинается новая итерация.
<hr>

static void Func2(ref KeyValuePair<int, string>[] a, int key, string value)<br>
{<br>
  int pos;<br>
  KeyValuePair<int, string> keyValuePair;
 
  if (a.Length == 0)<br>
  {<br>
    Array.Resize(ref a, 1);<br>
    keyValuePair = new KeyValuePair<int, string>(key, value);<br>
    a[0] = keyValuePair;<br>
    return;<br>
  }<br>
 
  if (key < a[0].Key)<br>
    pos = 0;<br>
  else if (key > a[a.Length - 1].Key)<br>
    pos = a.Length;<br>
  else<br>
    pos = Func1(a, 0, a.Length - 1, key);<br>
 
  Array.Resize(ref a, a.Length + 1);<br>
  for (int i = a.Length - 1; i > pos; i--)<br>
    a[i] = a[i - 1];<br>
 
  keyValuePair = new KeyValuePair<int, string>(key, value);<br>
  a[pos] = keyValuePair;<br>
}


**Func2** - вставляет новое значение в массив, увеличивая его на 1

- a - массив с которым будет работать функция
- key - ключ для нового элемента массива
- value - значение нового элемента массива 

 > if (a.Length == 0)
  {<br>
    Array.Resize(ref a, 1);<br>
    keyValuePair = new KeyValuePair<int, string>(key, value);<br>
    a[0] = keyValuePair;<br>
    return;<br>
  } <br>
  - Если массив пустой, увеличивает его на 1, добавляет новое значение на первую позицию и останавливает функцию
  
 >if (key < a[0].Key)
    pos = 0;
  - Если ключ меньше первого значения массива, определяет позицию нового элемента в начале массива
 >else if (key > a[a.Length - 1].Key)
    pos = a.Length;
  - Если ключ больше последнего значения массива, определяет позицию в конеце массива
  >else
    pos = Func1(a, 0, a.Length - 1, key);
  - В ином случае позиция определяется функцией **Func1**
 
  >Array.Resize(ref a, a.Length + 1);<br>
  for (int i = a.Length - 1; i > pos; i--)<br>
    a[i] = a[i - 1];
  - Увеличивает длинну массива на 1 и смещает все значения массива на один индекс дальше, начиная с последнего элемента
 
  >keyValuePair = new KeyValuePair<int, string>(key, value);<br>
  a[pos] = keyValuePair;<br>
  - Вставляет новый элемент в массив
