const fs = require('fs');
const path = require('path');
const https = require('https');

const CAR_MODELS = [
    { name: "Alto", seats: "5", price: "₹1,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20800%20LXi.JPG" },
    { name: "Alto New", seats: "5", price: "₹1,200", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20800%20LXi.JPG" },
    { name: "Alto K10", seats: "5", price: "₹1,500", image: "https://commons.wikimedia.org/wiki/Special:FilePath/SuzukiAltok10.jpg" },
    { name: "Celerio", seats: "5", price: "₹1,600", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki_Celerio_(second_generation)_in_Indonesia.jpg" },
    { name: "Celerio Red", seats: "5", price: "₹1,700", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2014_Suzuki_Celerio_1.0_SZ3.jpg" },
    { name: "Swift LXI", seats: "5", price: "₹1,700", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Swift_VXi_2019.jpg" },
    { name: "Swift New", seats: "5", price: "₹2,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Swift_VXi_2019.jpg" },
    { name: "Dzire LXI", seats: "5", price: "₹1,800", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Dzire_VXi_VVT.JPG" },
    { name: "Dzire VXI", seats: "5", price: "₹2,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Dzire_VXi_VVT.JPG" },
    { name: "Dzire Top", seats: "5", price: "₹2,200", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_Dzire_VXi_VVT.JPG" },
    { name: "Baleno", seats: "5", price: "₹2,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Maruti_Suzuki_Baleno_Alpha_(India).jpg" },
    { name: "Baleno Top", seats: "5", price: "₹2,200", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Maruti_Suzuki_Baleno_Alpha_(India).jpg" },
    { name: "Honda Amaze", seats: "5", price: "₹2,100", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Honda_Amaze_front_view.jpg" },
    { name: "Tata Tigor", seats: "5", price: "₹2,100", image: "https://commons.wikimedia.org/wiki/Special:FilePath/TATA_Tigor_at_Shillong_Peak_View.jpg" },
    { name: "Hyundai Exter", seats: "5", price: "₹2,500", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2023_Hyundai_Exter.jpg" },
    { name: "i20 Sunroof", seats: "5", price: "₹2,500", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_i20_1.0_T-GDi_48V_MHEV_BC3_Atlas_White_(1).jpg" },
    { name: "Nexon Sunroof", seats: "5", price: "₹2,700", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2018_Tata_Nexon_XM.jpg" },
    { name: "Brezza Top", seats: "5", price: "₹2,600", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Vitara_Brezza.jpg" },
    { name: "Brezza Sunroof", seats: "5", price: "₹3,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Vitara_Brezza.jpg" },
    { name: "Venue", seats: "5", price: "₹2,700", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Venue_White_1.jpg" },
    { name: "Ertiga", seats: "7", price: "₹2,700", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki_Ertiga,_MPV_front_view.jpg" },
    { name: "Ertiga Top", seats: "7", price: "₹2,800", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki_Ertiga,_MPV_front_view.jpg" },
    { name: "XL6", seats: "6", price: "₹2,600", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti_Suzuki_XL6_(front).jpg" },
    { name: "Scorpio S11 Black", seats: "7", price: "₹5,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra_Scorpio_S11.jpg" },
    { name: "Thar 4x4", seats: "4", price: "₹5,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra_Thar_lx_hard_top_diesel_mt_aquamarine.jpg" },
    { name: "Roxx", seats: "5", price: "₹8,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra_Thar_lx_hard_top_diesel_mt_aquamarine.jpg" },
];

const downloadImage = (url, localPath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(localPath);
        const options = {
            headers: {
                'User-Agent': 'RanchiCarRentalBot/1.0 (https://ranchicarrental.com; contact@ranchicarrental.com)'
            }
        };

        https.get(url, options, (response) => {
            // Handle redirects if any
            if (response.statusCode === 301 || response.statusCode === 302) {
                // For redirects, we need to handle the new URL recursively
                // Basic redirect handling might not pass headers automatically depending on implementation
                // but usually fine for simple gets. Let's recurse.
                let newUrl = response.headers.location;
                if (!newUrl.startsWith('http')) {
                    // Handle relative redirects if necessary (unlikely for wikimedia cross-domain)
                    const parsedOriginal = new URL(url);
                    newUrl = `${parsedOriginal.protocol}//${parsedOriginal.host}${newUrl}`;
                }
                downloadImage(newUrl, localPath).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded image to ${localPath}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(localPath, () => { });
            reject(err);
        });
    });
};

const resolveImageUrl = (specialFilePathUrl) => {
    return new Promise((resolve, reject) => {
        // Extract filename from URL
        const prefix = "Special:FilePath/";
        const index = specialFilePathUrl.indexOf(prefix);
        if (index === -1) {
            resolve(specialFilePathUrl); // Not a special path, return as is
            return;
        }

        // Get raw filename, replace %20 with _, and decode just in case
        let filename = specialFilePathUrl.substring(index + prefix.length);
        filename = filename.replace(/%20/g, '_');
        filename = decodeURIComponent(filename); // "Maruti_Suzuki_Alto..."

        // Construct API URL
        const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;

        const options = {
            headers: { 'User-Agent': 'RanchiCarRentalBot/1.0 (https://ranchicarrental.com; contact@ranchicarrental.com)' }
        };

        https.get(apiUrl, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query?.pages;
                    if (!pages) {
                        reject(new Error("No pages found in API response"));
                        return;
                    }
                    const pageId = Object.keys(pages)[0];
                    if (pageId === "-1") {
                        // Try searching for the file without File: prefix or exactly as is if it fails
                        // But usually -1 means file not found.
                        reject(new Error(`File not found via API: ${filename}`));
                        return;
                    }
                    const url = pages[pageId]?.imageinfo?.[0]?.url;
                    if (url) {
                        resolve(url);
                    } else {
                        reject(new Error("No imageinfo/url found in API response"));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
};

const searchImage = (query) => {
    return new Promise((resolve, reject) => {
        // Search specifically for files (namespace 6)
        const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json`;

        const options = {
            headers: { 'User-Agent': 'RanchiCarRentalBot/1.0 (https://ranchicarrental.com; contact@ranchicarrental.com)' }
        };

        https.get(apiUrl, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    // Get first result
                    const firstResult = json.query?.search?.[0];
                    if (firstResult && firstResult.title) {
                        // Title is like "File:Filename.jpg"
                        // We need to resolve this title to a URL now
                        // We can construct a Special:FilePath URL or call resolveImageUrl with the title
                        // resolveImageUrl expects Special:FilePath/Filename or just Filename logic?
                        // resolveImageUrl parses "Special:FilePath/..."

                        // Let's just recursively call resolveImageUrl with "Special:FilePath/" + filename portion
                        const title = firstResult.title;
                        // Remove "File:" prefix if present for clean Special:FilePath construction (though File: is allowed in some contexts, Special:FilePath usually takes just name)
                        // Actually Special:FilePath/File:Name resolves.
                        resolve(title);
                    } else {
                        reject(new Error(`No search results for ${query}`));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
};

const main = async () => {
    const imagesDir = path.join(__dirname, '../public/images/cars');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    const downloadedUrls = new Set();
    const urlToFilename = new Map();

    for (const car of CAR_MODELS) {
        if (!car.image.startsWith('http')) continue;

        let filename;
        const slug = car.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        console.log(`Processing ${car.name}...`);

        try {
            let finalUrl = car.image;
            let resolved = false;

            if (car.image.includes("wikimedi")) {
                try {
                    finalUrl = await resolveImageUrl(car.image);
                    resolved = true;
                    console.log(`Resolved ${car.name} to ${finalUrl}`);
                } catch (e) {
                    console.warn(`Direct resolution failed for ${car.name}: ${e.message}`);
                    // Fallback search
                    try {
                        console.log(`Searching for "${car.name}"...`);
                        const searchTitle = await searchImage(car.name + " car"); // Add 'car' for context
                        console.log(`Found: ${searchTitle}`);
                        // Now resolve the URL for this title
                        // Special:FilePath/Title works
                        const specialUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(searchTitle.replace('File:', ''))}`;
                        finalUrl = await resolveImageUrl(specialUrl);
                        console.log(`Resolved search result to ${finalUrl}`);
                        resolved = true;
                    } catch (searchErr) {
                        console.error(`Search failed for ${car.name}:`, searchErr.message);
                    }
                }
            }

            // Extract extension from final URL
            let ext = path.extname(finalUrl.split('?')[0]) || '.jpg';
            if (ext.length > 5 || !ext) ext = '.jpg';

            filename = `${slug}${ext}`;
            const localPath = path.join(imagesDir, filename);

            urlToFilename.set(car.image, `/images/cars/${filename}`);

            if (fs.existsSync(localPath)) {
                // Check if file is empty (0 bytes), if so, delete and retry
                const stats = fs.statSync(localPath);
                if (stats.size > 0) {
                    console.log(`File ${filename} exists (${stats.size} bytes). Skipping.`);
                    continue;
                } else {
                    console.log(`File ${filename} exists but is 0 bytes. Deleting and retrying.`);
                    fs.unlinkSync(localPath);
                }
            }

            await downloadImage(finalUrl, localPath);
        } catch (e) {
            console.error(`Failed to download for ${car.name}:`, e.message);
        }
    }

    console.log("\n--- NEW MAPPING ---");
    for (const [url, local] of urlToFilename) {
        console.log(`"${url}" -> "${local}"`);
    }
};

main();
