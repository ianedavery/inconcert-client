# RecipeBox

https://recipebox.website/#/

##API Documentation

###Show Recipes

Returns json data about all user's recipes.

  * **URL**
    /api/recipies

  * **Method:**
    `GET`

  * **Success Response:**
    * **Code:** 200 <br />
      **Content:** `{name: 'Lemonade, instuctions: 'Mix it all together'}`

  * **Error Response:**
    * **Code:** 500 <br />
      **Content:** `{message: 'Internal Server Error'}`

    OR

    * **Code:** 404 Not Found <br />
      **Content:** `{message: 'Not Found'}`

    OR

    * **Code:** 401 Unauthorize <br />
      **Content:** `{message: 'Unauthorized'}`

  * **Sample Call:**

    ```javascript
      $.ajax({
        url: 'api/recipies',
        datatype: 'json',
        type: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function(r) {
          console.log(r);
        }
      });
    ```

![Alt text](https://github.com/ianedavery/recipebox-client/blob/master/src/components/images/recipescreenshot.png)
![Alt text]()