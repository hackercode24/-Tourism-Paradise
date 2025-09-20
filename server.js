const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for local testing
app.use(cors());

// Serve static files from project root
app.use(express.static(path.join(__dirname)));

// Mock data (same as frontend sample)
const SAMPLE_DESTINATIONS = [
	{
		id: "taj-mahal",
		name: "Taj Mahal",
		location: "Agra, India",
		category: "Famous Landmarks",
		categoryId: "famousLandmarks",
		region: "Asia",
		description: "A breathtaking symbol of eternal love, this white marble mausoleum was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
		highlights: ["UNESCO World Heritage Site", "One of Seven Wonders"],
		bestTime: "October to March",
		attractions: ["Main mausoleum", "Beautiful Charbagh gardens"],
		tips: "Visit early morning for best lighting and fewer crowds.",
		image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800"
	},
	{
		id: "santorini",
		name: "Santorini",
		location: "Greece",
		category: "Beach Destinations",
		categoryId: "beachDestinations",
		region: "Europe",
		description: "Famous for its dramatic cliffs, pristine white-washed buildings, and spectacular sunsets over the deep blue Aegean Sea.",
		highlights: ["World-famous sunsets", "Distinctive architecture"],
		bestTime: "April to November",
		attractions: ["Oia village", "Red Beach"],
		tips: "Book sunset dinner reservations early.",
		image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800"
	}
];

const fs = require('fs');
const postsFilePath = path.join(__dirname, 'posts.json');

// Helper function to read posts from file
function readPosts() {
	try {
		const data = fs.readFileSync(postsFilePath, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error reading posts file:', error);
		return [];
	}
}

// Helper function to write posts to file
function writePosts(posts) {
	try {
		fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
	} catch (error) {
		console.error('Error writing posts file:', error);
	}
}

// Simple in-memory store for posts, initialized from file
let posts = readPosts();

// Endpoints
app.get('/api/destinations', (req, res) => {
	res.json({ destinations: SAMPLE_DESTINATIONS });
});

app.post('/api/posts', (req, res) => {
	try {
		const { title, imageUrl, description } = req.body;

		if (!title || !imageUrl || !description) {
			return res.status(400).json({ error: 'All fields are required' });
		}

		const newPost = {
			id: `post-${Date.now()}`,
			title,
			imageUrl,
			description,
			createdAt: new Date(),
		};

		posts.push(newPost);
		writePosts(posts);
		console.log('New post created:', newPost);
		res.status(201).json(newPost);
	} catch (error) {
		console.error('Error creating post:', error);
		res.status(500).json({ error: 'Failed to create post' });
	}
});

app.post('/api/contact', (req, res) => {
	const { name, email, message } = req.body;
	console.log('Contact form submission:', { name, email, message });
	res.json({ success: true, message: 'Message received!' });
});

app.post('/api/newsletter', (req, res) => {
	const { email } = req.body;
	console.log('Newsletter subscription:', { email });
	res.json({ success: true, message: 'Subscribed successfully!' });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
	console.log(`Mock server listening at http://localhost:${port}`);
});
