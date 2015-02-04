# fantabular.js

easily responsivify your `<table>`s.

---

### what it does:

for mobile views, to make tables responsive, fantabular.js turns this:

<table>
  <thead>
    <tr>
      <th>
        header 1
      </th>
      <th>
        header 2
      </th>
      <th>
        header 3
      </th>
      <th>
        header 4
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        data 1
      </td>
      <td>
        data 2
      </td>
      <td>
        data 3
      </td>
      <td>
        data 4
      </td>
    </tr>
    <tr>
      <td>
        data 1
      </td>
      <td>
        data 2
      </td>
      <td>
        data 3
      </td>
      <td>
        data 4
      </td>
    </tr>
    <tr>
      <td>
        data 1
      </td>
      <td>
        data 2
      </td>
      <td>
        data 3
      </td>
      <td>
        data 4
      </td>
    </tr>
    <tr>
      <td>
        data 1
      </td>
      <td>
        data 2
      </td>
      <td>
        data 3
      </td>
      <td>
        data 4
      </td>
    </tr>
  </tbody>
</table>

into this:

<table>
  <tbody>
    <tr>
      <td>
        <table>
          <tbody>
            <tr>
              <td class="header">
                <strong>header 1</strong>
              </td>
              <td>
                data 1
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 2</strong>
              </td>
              <td>
                data 2
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 3</strong>
              </td>
              <td>
                data 3
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 4</strong>
              </td>
              <td>
                data 4
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table>
          <tbody>
            <tr>
              <td class="header">
                <strong>header 1</strong>
              </td>
              <td>
                data 1
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 2</strong>
              </td>
              <td>
                data 2
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 3</strong>
              </td>
              <td>
                data 3
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 4</strong>
              </td>
              <td>
                data 4
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table>
          <tbody>
            <tr>
              <td class="header">
                <strong>header 1</strong>
              </td>
              <td>
                data 1
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 2</strong>
              </td>
              <td>
                data 2
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 3</strong>
              </td>
              <td>
                data 3
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 4</strong>
              </td>
              <td>
                data 4
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table>
          <tbody>
            <tr>
              <td class="header">
                <strong>header 1</strong>
              </td>
              <td>
                data 1
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 2</strong>
              </td>
              <td>
                data 2
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 3</strong>
              </td>
              <td>
                data 3
              </td>
            </tr>
            <tr>
              <td class="header">
                <strong>header 4</strong>
              </td>
              <td>
                data 4
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

---

### dependencies

`fantabular.js` requires jQuery to be loaded into the project to run properly.

---

### usage

call `.fantabular()` on any `table` using jQuery. for example:

```javascript
  $('#myTable').fantabular();
```

---

### configuration

you can optionally pass in an options object into the function invocation:

```javascript
  $('#myTable').fantabular({
    /* options here.. */
  });
```

the following options are available:

  -  `mobile_class`: `String` - class to apply to the mobile version of the table. able to be used to show/hide using `@media` queries in CSS according to viewport breakpoints. defaults to `'visible-xs'`.
  -  `desktop_class`: `String` - class to apply to the desktop version of the table. able to be used similarly to `mobile_class`.
  -  `selector`: `String` - selector to search for inside the called upon object to override the call on the object. for example,  `$('body').fantabular({ selector: 'table' });` would call `.fantabular()` on all the `table`s inside `body`.
  -  `inherit_classes`: `Boolean` - turns class inheritance on/off from the desktop version of the table to the mobile version of the table. defaults to `true`.

an example configuration would be:

```javascript
  $('#myTable').fantabular({
    mobile_class: 'show-on-mobile',
    desktop_class: 'hide-on-mobile',
    inherit_classes: false;
  });
```

---

### author

`fantabular.js` is written and maintained by Joah Gerstenberg (@joahg), Copyright 2015 under the MIT License.
