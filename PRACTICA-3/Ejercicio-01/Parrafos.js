document.write("<p>");
    document.write("<ul>");
        document.write("<li>");
            document.write(asignatura.nombre);
        document.write("</li>");

        document.write("<li>Titulación: ");
            document.write(asignatura.titulacion);
        document.write("</li>");

        document.write("<li>Centro: ");
            document.write(asignatura.centro);
        document.write("</li>");
    document.write("</ul>");
document.write("</p>");

document.write("<p>");
    document.write("<ul>");
        document.write("<li>Universidad: ");
            document.write(asignatura.universidad);
        document.write("</li>");

        document.write("<li>Curso actual: ");
            document.write(asignatura.curso);
        document.write("</li>");

        document.write("<li>Profesor: ");
            document.write(asignatura.profesor);
        document.write("</li>");
        
        document.write("<li>e-mail: ");
            document.write(asignatura.email);
        document.write("</li>");
    document.write("</ul>");
document.write("</p>");