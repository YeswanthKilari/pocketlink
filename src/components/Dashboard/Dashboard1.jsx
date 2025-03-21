import { useState } from "react";

export default function Dashboard1({ setShowCollections, addCollection }) {
    const [newCollection, setNewCollection] = useState({ category: "", link: "", description: "" });
    const [categories, setCategories] = useState(["Web development", "Machine learning", "cyber security", "mechaical"]);
    const [newCategory, setNewCategory] = useState("");

    // Debugging logs to check if props are passed
    console.log("Dashboard1 Props:", { setShowCollections, addCollection });

    const handleCreateCollection = () => {
        const { category, link, description } = newCollection;

        if (!category || !link.trim() || !description.trim()) {
            alert("All fields are required!");
            return;
        }

        console.log("Adding collection:", newCollection); // Debugging Log

        if (typeof addCollection === "function") {
            addCollection({ ...newCollection, link: link.trim(), description: description.trim() });
        } else {
            console.warn("addCollection is not passed or not a function!");
        }

        setNewCollection({ category: "", link: "", description: "" });

        console.log("Closing modal..."); // Debugging Log
        setShowCollections(false);
    };

    const handleAddCategory = () => {
        const trimmedCategory = newCategory.trim();
        if (trimmedCategory && !categories.includes(trimmedCategory)) {
            setCategories([...categories, trimmedCategory]);
            setNewCategory("");
        } else {
            alert("Category already exists or is invalid!");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-stone-600/30 backdrop-blur-md">
            <div className="bg-black p-6 rounded-md shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4 text-white">Create a New Collection</h2>

                {/* Resource Link Input */}
                <input
                    type="text"
                    placeholder="Resource Link"
                    className="w-full border p-2 rounded-md mb-3 text-white bg-black"
                    value={newCollection.link}
                    onChange={(e) => setNewCollection({ ...newCollection, link: e.target.value })}
                />

                {/* Description Textarea */}
                <textarea
                    placeholder="Description"
                    className="w-full border p-2 rounded-md mb-3 text-white bg-black"
                    value={newCollection.description}
                    onChange={(e) => setNewCollection({ ...newCollection, description: e.target.value })}
                />

                {/* Category Dropdown */}
                <select
                    className="w-full border p-2 rounded-md mb-3 bg-black text-white"
                    value={newCollection.category}
                    onChange={(e) => setNewCollection({ ...newCollection, category: e.target.value })}
                >
                    <option value="">Select Category</option>
                    {categories.map((cat, i) => (
                        <option key={i} value={cat} className="bg-black text-white">
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Add New Category Section */}
                <div className="flex space-x-2 mb-3">
                    <input
                        type="text"
                        placeholder="New Category"
                        className="border p-2 rounded-md flex-1 text-white bg-black"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <button onClick={handleAddCategory} className="bg-gray-950 text-white px-3 py-2 rounded-md hover:bg-green-700">
                        Add
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2">
                    <button onClick={() => setShowCollections(false)} className="bg-gray-100 px-3 py-2 rounded-md">Cancel</button>
                    <button
                        onClick={handleCreateCollection}
                        className={`px-3 py-2 rounded-md ${newCollection.category && newCollection.link.trim() && newCollection.description.trim() 
                            ? "bg-blue-600 text-white hover:bg-blue-700" 
                            : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                        disabled={!newCollection.category || !newCollection.link.trim() || !newCollection.description.trim()}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
