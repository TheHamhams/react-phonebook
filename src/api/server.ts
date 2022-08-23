let token = '20dcf6809bde56e24ff5626264afcf38819885d3aeeb5952'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://flaskphonebook.herokuapp.com/api/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            }           
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any={}) => {
        const response = await fetch('https://flaskphonebook.herokuapp.com/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return response.json()

    },

    update: async(id:string, data: any ={}) => {
        const response = await fetch(`https://flaskphonebook.herokuapp.com/api/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    },

    delete: async(id:string) => {
        const response = await fetch(`https://flaskphonebook.herokuapp.com/api/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        })
    }

}