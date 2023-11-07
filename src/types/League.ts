interface Team {
    id: string | null,
    name: string | null,
    country?: string | null,
    logo?: string,
    founded?: string | null
}

interface TeamDetails {
    players: [],
    total_players?: string | null,
    info: {
        name: string | null,
        founded: string | null,
        logo: string,
        country: string | null
    },
    venue: {
        stadium: string | null,
        city?: string | null,
        capacity?: string | null
    }
}

export type { Team, TeamDetails };