var zodiac = [
	{
		sign: "aquarius",
		description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic.",
		image: "img/aquarius.jpg"
	},
	{
		sign: "aries",
		description: "As the first sign in the zodiac, the presence of Aries almost always marks the beginning of something energetic and turbulent.",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging Zodiac signs to get to know.",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		description: "When it comes to professionalism and traditional values, Capricorn is the first.",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		description: "Expressive and quick-witted, Gemini represents two different sides of personality and you will never be sure with whom you will face.",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		description: "People born under the sign of Leo are natural born leaders.",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		description: "People born under the sign of Libra are peaceful and fair, and they hate being alone.",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		description: "Pisces are very friendly, so they often find themselves in a company of very different people.",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs.",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		description: "Scorpio-born are passionate and assertive people.",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		description: "Powerful and reliable, Taurus is the first when it comes to harvesting the fruits of his labor.",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		description: "Virgos are always paying attention to smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac.",
		image: "img/virgo.jpg"
	}
]

function zodiacDescription() {
	var sign = document.getElementById("sign").value.toLowerCase()
	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = "Your sign is " + zodiac[i].sign + "."
			document.getElementById("signDescription").innerHTML = zodiac[i].description
			document.getElementById("symbol").src = zodiac[i].image
			return
		}else {
			document.getElementById("yourSign").innerHTML = "This is an incorrect sign. Please try again."
			document.getElementById("signDescription").innerHTML = ""
			document.getElementById("symbol").src = ""
		}
	}
}








