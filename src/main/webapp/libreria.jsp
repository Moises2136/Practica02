<%-- 
    Document   : libreria
    Created on : 20 sep 2026, 6:45:30 p.m.
    Author     : Moises Corpus Garcia
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Librería en línea</title>
    <link rel="stylesheet" href="css/libreria.css">
</head>
<body>

    <header class="header">
        <h1>📚 Nuestra Librería</h1>
    </header>

    <main class="contenedor">
        <c:forEach var="libro" items="${libros}">
            <div class="tarjeta">
                <h2>${libro.titulo}</h2>
                <p class="autor">${libro.autor}</p>
                <p class="precio">$${libro.precio}</p>
            </div>
        </c:forEach>
    </main>

    <script src="js/libreria.js"></script>
</body>
</html>
