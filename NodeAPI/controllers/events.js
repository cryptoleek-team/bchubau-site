require("dotenv").config({ path: ".env.local" });
const axios = require("axios");
const baseUrl = 'https://www.eventbriteapi.com/v3'
const token = process.env.EVENTBRITE_API_TOKEN;
const utils = require("../utils")

exports.list = async (req, res, next) => {
    try {
        const id = await getOrganisationId();
        let events = [];
        const customUrl = baseUrl + `/organizations/${id}/events`;
        const { data } = await axios.get(customUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (data && data.events) {
            for (i = 0; i < data.events.length; i++) {
                if (i === 3) {
                    break;
                }
                if (data.events[i].status === "completed") {
                    break;
                } else {
                    events.push({
                        "id": "00" + (i + 1),
                        "name": data.events[i].name.text,
                        "url": data.events[i].url,
                        "start": utils.formatDate(data.events[i].start.local),
                        "duration": utils.getDuaration(data.events[i].start.local, data.events[i].end.local) + " hours",
                        "img": data.events[i].logo.original.url,
                        "capacity": data.events[i].capacity,
                        "location": await getVenueAddress(data.events[i].venue_id),
                        "status": data.events[i].status
                    })
                }

            }
        }
        res.status(200).json(events);
    } catch (err) {
        next(err);
    }
}

async function getOrganisationId() {
    const customUrl = baseUrl + "/users/me/organizations/";
    const resposne = await axios.get(customUrl, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (resposne && resposne.status === 200) {
        return resposne.data.organizations[0].id;
    }
}

async function getVenueAddress(id) {
    const customUrl = baseUrl + `/venues/${id}`;
    let address = '';
    const response = await axios.get(customUrl, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response) {
        const data = response.data.address;
        address = data.address_1 + ", " + data.city + " " + data.region + " " + data.postal_code;
        return address;
    }
}