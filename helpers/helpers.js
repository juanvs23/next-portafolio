export const validate = (text, element, clss) => {
  const toCheck = document.querySelector(`#${element}`);
  if (!toCheck.classList.contains(clss)) {
    const alert = document.createElement("div");
    const alertText = document.createTextNode(`${text}`);
    alert.setAttribute("class", "alert-feedback");
    alert.setAttribute("data-set-alert", toCheck.id);
    alert.appendChild(alertText);
    toCheck.classList.add(clss);

    toCheck.parentNode.insertBefore(alert, toCheck.nextSibling);
  }
};

export const excerpt = (content, limit) => {
  const text = content.substring(0, limit);

  return `${text}... </p>`;
};
