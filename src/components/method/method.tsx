type ApiResponse<T = any> = {
  data: T;
  status: number;
  message?: string;
};

const baseURL = import.meta.env.VITE_BASE_URL;

// ------------------ GET ------------------
export const GetApi = async <T = any>(
  endpoint: string,
  params?: Record<string, any>
): Promise<ApiResponse<T>> => {
  const url = new URL(`${baseURL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, String(value))
    );
  }

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return {
      data,
      status: res.status,
      message: data?.message,
    };
  } catch (error: any) {
    console.error("GetApi error:", error);
    throw new Error(error?.message || "GET request failed");
  }
};

// ------------------ POST ------------------
export const PostApi = async <T = any>(
  endpoint: string,
  body: Record<string, any>
): Promise<ApiResponse<T>> => {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return {
      data,
      status: res.status,
      message: data?.message,
    };
  } catch (error: any) {
    console.error("PostApi error:", error);
    throw new Error(error?.message || "POST request failed");
  }
};

// ------------------ PUT ------------------
export const PutApi = async <T = any>(
  endpoint: string,
  body: Record<string, any>
): Promise<ApiResponse<T>> => {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return {
      data,
      status: res.status,
      message: data?.message,
    };
  } catch (error: any) {
    console.error("PutApi error:", error);
    throw new Error(error?.message || "PUT request failed");
  }
};

// ------------------ PATCH ------------------
export const PatchApi = async <T = any>(
  endpoint: string,
  body: Record<string, any>
): Promise<ApiResponse<T>> => {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return {
      data,
      status: res.status,
      message: data?.message,
    };
  } catch (error: any) {
    console.error("PatchApi error:", error);
    throw new Error(error?.message || "PATCH request failed");
  }
};

// ------------------ DELETE ------------------
export const DeleteApi = async <T = any>(
  endpoint: string,
  body?: Record<string, any>
): Promise<ApiResponse<T>> => {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    return {
      data,
      status: res.status,
      message: data?.message,
    };
  } catch (error: any) {
    console.error("DeleteApi error:", error);
    throw new Error(error?.message || "DELETE request failed");
  }
};
