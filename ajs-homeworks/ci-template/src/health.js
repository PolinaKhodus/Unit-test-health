
export default function GetHealth(person) {
  if (person.health > 50) {
    return "healthy";
  }
  if (person.health <= 50 && person.health >= 15) {
    return "wounded";
  } 
  else {
    return "critical";
  }
}
 