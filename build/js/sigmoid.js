function sigmoid(z) {
    return 1.0 / (1.0 + Math.exp(-z));
}
exports.sigmoid = sigmoid;
function sigmoidPrime(z) {
    return Math.exp(-z) / Math.pow(1.0 + Math.exp(-z), 2);
}
exports.sigmoidPrime = sigmoidPrime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ21vaWQudHMiXSwibmFtZXMiOlsic2lnbW9pZCIsInNpZ21vaWRQcmltZSJdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQXlCLENBQVM7SUFDaENBLE1BQU1BLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ3BDQSxDQUFDQTtBQUZlLGVBQU8sVUFFdEIsQ0FBQTtBQUVELHNCQUE2QixDQUFTO0lBQ3BDQyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN4REEsQ0FBQ0E7QUFGZSxvQkFBWSxlQUUzQixDQUFBIiwiZmlsZSI6InNpZ21vaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2lnbW9pZCAoejogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIDEuMCAvICgxLjAgKyBNYXRoLmV4cCgteikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbW9pZFByaW1lKHo6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmV4cCgteikgLyBNYXRoLnBvdygxLjAgKyBNYXRoLmV4cCgteiksIDIpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==