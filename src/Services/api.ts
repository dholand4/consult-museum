import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export interface SearchResult {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImage: string;
  creditLine: string;
  publicDomain: boolean;
}

export interface ObjectDetails extends SearchResult {
  publicDomain: any;
  culture: string;
  medium: string;
  dimensions: string;
  creditLine: string;
}

// Função para lidar com erros de requisição
function handleRequestError(error: AxiosError<unknown>): never {
  if (error.response) {
    console.error("Erro na requisição:", error.response.status);
    throw new Error(
      "Falha na solicitação. Por favor, tente novamente mais tarde."
    );
  } else if (error.request) {
    console.error("Erro na requisição:", error.request);
    throw new Error(
      "Falha na solicitação. Por favor, verifique sua conexão de rede."
    );
  } else {
    console.error("Erro:", error.message);
    throw new Error(
      "Ocorreu um erro ao processar a solicitação. Por favor, tente novamente."
    );
  }
}

// Função para buscar objetos do Met Museum por palavra-chave
export async function searchObjectsByKeyword(
  keyword: string
): Promise<SearchResult[] | undefined> {
  try {
    const response: AxiosResponse<{ objectIDs: number[] }> = await axios.get(
      `${BASE_URL}/search`,
      {
        params: { q: keyword },
      }
    );

    const objectIDs = response.data.objectIDs;
    if (objectIDs) {
      const limitedObjectIDs = objectIDs.slice(0, 20);
      const objectPromises = limitedObjectIDs.map((objectID) =>
        getObjectDetails(objectID)
      );

      const objects = await Promise.all(objectPromises);
      return objects.filter((object) => object !== undefined) as SearchResult[];
    } else {
      return [];
    }
  } catch (error) {
    return handleRequestError(error as AxiosError<unknown>);
  }
}

// Função para obter detalhes de um objeto específico do Met Museum
export async function getObjectDetails(
  objectId: number
): Promise<ObjectDetails | undefined> {
  try {
    const response: AxiosResponse<ObjectDetails> = await axios.get(
      `${BASE_URL}/objects/${objectId}`
    );

    const titleWords = response.data.title.split(" "); // Divide o título em palavras
    let truncatedTitle = "";

    for (let i = 0; i < 3 && i < titleWords.length; i++) {
      if (titleWords[i].includes("(")) {
        // Se uma das duas primeiras palavras contém um parêntese aberto "(",
        // não adiciona ao título truncado
        break;
      }
      truncatedTitle += titleWords[i] + " ";
    }

    truncatedTitle = truncatedTitle.trim(); // Remove espaços em branco no início e no final

    const modifiedData: ObjectDetails = {
      ...response.data,
      title: truncatedTitle,
    };

    return modifiedData;
  } catch (error) {
    return handleRequestError(error as AxiosError<unknown>);
  }
}
