const total = 10;
    const reserved = 0;
    const available = total - reserved;

    document.getElementById("total").textContent = total;
    document.getElementById("reserved").textContent = reserved;
    document.getElementById("available").textContent = available;

    document.getElementById("total2").textContent = total;
    document.getElementById("reserved2").textContent = reserved;
    document.getElementById("available2").textContent = available;

    const percent = total > 0
      ? Math.round((reserved / total) * 100)
      : 0;

    document.getElementById("percent").textContent = percent + "%";
    document.getElementById("progressBar").style.width = percent + "%";

    document.getElementById("reservedText").textContent =
      reserved + " яиц забронировано";

    document.getElementById("availableText").textContent =
      available + " доступно";

    const status = document.getElementById("availabilityStatus");

    if (available === 0) {
      status.textContent = "Нет в наличии";
      status.className = "status status-red";
    } else if (available < total * 0.2) {
      status.textContent = "Мало осталось";
      status.className = "status status-yellow";
    } else {
      status.textContent = "В наличии";
      status.className = "status status-green";
    }

    const today = new Date();

    document.getElementById("date").textContent =
      today.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
