# RecipeBox

https://recipebox.website/#/

## API Documentation

### Show Recipes

Returns json data about all user's recipes.

  * **URL**
    /api/recipies

  * **Method:**
    `GET`

  * **Success Response:**
    * **Code:** 200 OK <br />
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

### Show Specific Recipe

Returns json data about a single user recipe.

  * **URL**
    /api/recipies/:id

  * **Method:**
    `GET`

  * **Success Response:**
    * **Code:** 200 OK <br />
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
        url: 'api/recipies/' + id,
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

### Show Public Recipes

Returns json data about public recipes.

  * **URL**
    /api/recipies/public

  * **Method:**
    `GET`

  * **Success Response:**
    * **Code:** 200 OK <br />
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
        url: 'api/recipies/public',
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

### Create a New Recipe

Adds a new recipe to the user's account.

  * **URL**
    /api/recipies

  * **Method:**
    `POST`

  * **Success Response:**
    * **Code:** 201 Created <br />
      **Content:** `{
                        "id": "5abac2a958803b2d096b6a79",
                        "name": "waffles",
                        "ingredients": [
                            {
                                "_id": "5abac2a958803b2d096b6a7a",
                                "ingredient": "flour",
                                "measurement": "1 cup"
                            }
                        ],
                        "instructions": "mix",
                        "createdBy": "123",
                        "public": false,
                        "rating": 0,
                        "numberOfRatings": 0
                    }`

  * **Error Response:**
    * **Code:** 500 <br />
      **Content:** `{message: 'Internal Server Error'}`

    OR

    * **Code:** 404 Not Found <br />
      **Content:** `{message: 'Not Found'}`

    OR

    * **Code:** 401 Unauthorize <br />
      **Content:** `{message: 'Unauthorized'}`

    OR

    * **Code:** 422 Unprocessable Entity <br />
      **Content:** `{'[field] is missing from your request.'}`

  * **Sample Call:**

    ```javascript
      $.ajax({
        url: 'api/recipies/public',
        datatype: 'json',
        type: 'POST',
        data: JSON.stringify(
          {
            'name': 'waffles',
            'instructions': 'mix it all together',
            'ingredients': {
              'ingredient': 'flour',
              'measurement': '1 cup'
            }
          }
        ),
        headers: {
          'Authorization': 'Bearer ' + token
        },
        contentType: 'application/json',
        success: function(r) {
          console.log(r);
        }
      });
    ```

### Edit a Recipe

Edits a user's recipe.

  * **URL**
    /api/recipies/:id

  * **Method:**
    `PUT`

  * **Success Response:**
    * **Code:** 204 No Content

  * **Error Response:**
    * **Code:** 500 <br />
      **Content:** `{error: 'Something went wrong'}`

    OR

    * **Code:** 400 Bad Request <br />
      **Content:** `{error: 'Request path id and request body id values must match'}`

    OR

    * **Code:** 404 Not Found <br />
      **Content:** `{message: 'Not Found'}`

    OR

    * **Code:** 401 Unauthorize <br />
      **Content:** `{message: 'Unauthorized'}`

  * **Sample Call:**

    ```javascript
      $.ajax({
        url: 'api/recipies/' + id,
        datatype: 'json',
        type: 'PUT',
        data: JSON.stringify(
          {
            'id': '1234567890',
            'name': 'waffles'
          }
        ),
        headers: {
          'Authorization': 'Bearer ' + token
        },
        contentType: 'application/json',
        success: function(r) {
          console.log(r);
        }
      });
    ```

### Delete a Recipe

Delete a user's recipe.

  * **URL**
    /api/recipies/:id

  * **Method:**
    `DELETE`

  * **Success Response:**
    * **Code:** 204 No Content

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
        url: 'api/recipies/' + id,
        type: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function(r) {
          console.log(r);
        }
      });
    ```

## Screenshots:

![Alt text](https://github.com/ianedavery/recipebox-client/blob/master/src/components/images/recipescreenshot.png)
![Alt text]()