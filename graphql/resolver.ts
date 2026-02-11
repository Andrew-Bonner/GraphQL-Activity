import { db } from "./data";

interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    precipitation: string;
    friends: string[];
}

export const resolvers = {
    Query: {
        weather: async (_: any, param: WeatherInterface) => {
            return [db.find(item => item.zip === param.zip)];
        }
    },
    Mutation: {
        weather: async (_: any, param: {data: WeatherInterface}) => {
            return [db.find(item => item.zip === param.data.zip)];
        }
    }
};