        //fetch the navbar from navbar.html
        fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        function search() {
          var query = document.getElementById("searchInput").value;
          var results = document.getElementById("searchResults");
  
          // Show the search results div
          results.style.display = "block";
  
          // Clear previous results
          results.innerHTML = '';
  
          if (query === "") {
              results.innerHTML = '<div class="alert alert-warning" role="alert">يرجى إدخال كلمة بحث.</div>';
              return;
          }
  
          // Example of a static search. Replace with dynamic search logic if needed.
          var pages = [
              { title: "الصفحة الرئيسية", url: "index.html" },
              { title: "عن الموقع", url: "about.html" },
              { title: "الخدمات", url: "services.html" },
              { title: "تواصل معنا", url: "contact.html" }
          ];
  
          var filteredPages = pages.filter(function (page) {
              return page.title.includes(query);
          });
  
          if (filteredPages.length > 0) {
              results.innerHTML = "<ul class='list-group'>";
              filteredPages.forEach(function (page) {
                  results.innerHTML += "<li class='list-group-item'><a href='" + page.url + "'>" + page.title + "</a></li>";
              });
              results.innerHTML += "</ul>";
          } else {
              results.innerHTML = '<div class="alert alert-danger" role="alert">لم يتم العثور على نتائج.</div>';
          }
        }