const AWS = require("aws-sdk");
const express = require("express");
const cors = require("cors");
const app = express();
const awsConfig = {
  region: "eu-west-2",
  endpoint: "https://dynamodb.eu-west-2.amazonaws.com",
  accessKeyId: "AKIAZ4L4W27ZJZZM7W5H",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();
const db = new AWS.DynamoDB();
const tableNameCreator = (tableName) => ({ TableName: tableName });
const getProduct = async () => {
  try {
    const productData = await docClient
      .scan(tableNameCreator("Products1"))
      .promise();
    return {
      productData,
    };
  } catch (err) {
    console.log(err);
    console.log("failed to get data");
    return {};
  }
};
const getPackage = async () => {
  try {
    const pfpkg = await docClient
      .scan(tableNameCreator("CloudPF_Openshift"))
      .promise();
    const pData = await docClient.scan(tableNameCreator("Packages1")).promise();
    return {
      pfpkg,
      pData,
    };
  } catch {
    console.log("failed to get data");
    return {};
  }
};

const getvmw = async () => {
  try {
    const vmw = await docClient
      .scan(tableNameCreator("CloudPF_VMW_5G"))
      .promise();
    const pkg = await docClient.scan(tableNameCreator("Package")).promise();
    return {
      vmw,
      pkg,
    };
  } catch {
    console.log("failed to get data");
    return {};
  }
};
const getdu = async () => {
  try {
    const du = await docClient.scan(tableNameCreator("DU_5G_10")).promise();
    const dupkg = await docClient.scan(tableNameCreator("Package")).promise();
    return {
      du,
      dupkg,
    };
  } catch {
    console.log("failed to get data");
    return {};
  }
};
const getSolution = async () => {
  try {
    const solutions = await docClient
      .scan(tableNameCreator("Solutions"))
      .promise();
    const productData = await docClient
      .scan(tableNameCreator("Products1"))
      .promise();
    return {
      solutions,
      productData,
    };
  } catch {
    console.log("failed to get data");
    return {};
  }
};
const getoran = async () => {
  try {
    /*  const orn = await docClient.scan(tableNameCreator("5GC")).promise(); */
    const solutions = await docClient
      .scan(tableNameCreator("Solutions"))
      .promise();
    return {
      solutions,
    };
  } catch {
    console.log("failed to get data");
    return {};
  }
};

const getGc = async () => {
  try {
    const gcData = await docClient.scan(tableNameCreator("5GC")).promise();
    const productData = await docClient
      .scan(tableNameCreator("Products1"))
      .promise();
    return {
      gcData,
      productData,
    };
  } catch {
    console.log("failed to get data");
    return {};
  }
};
const UpdateProducts = (Route) => {
  return async (req, res) => {
    try {
      await docClient
        .put(req.body, (err, data) => {
          if (err) console.log(err);
          else console.log(data);
        })
        .promise();
      res.send(Route === "version" ? await getGc() : await getProduct());
    } catch (error) {
      res.send(JSON.stringify({ success: "failed" }));
    }
  };
};
const UpdateProduct = async (req, res, next) => {
  const { parentName, productName } = req.body;
  const SpecificItem = await docClient
    .get({
      Key: {
        productName: productName,
      },
      TableName: "Products1",
    })
    .promise();
  try {
    await docClient
      .put({
        TableName: "Products1",
        Item: { ...SpecificItem.Item, parentName: parentName },
      })
      .promise();
    res.send(await getProduct());
  } catch (error) {
    next(error);
  }
};
const createSolution = async (req, res) => {
  const { name } = req.body;
  try {
    await db
      .createTable({
        TableName: name,
        AttributeDefinitions: [
          {
            AttributeName: "version",
            AttributeType: "S",
          },
        ],
        KeySchema: [
          {
            AttributeName: "version",
            KeyType: "HASH",
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      })
      .promise();
    await docClient
      .put({
        TableName: "Solutions",
        Item: { ...req.body },
      })
      .promise();
    res.send(await getSolution());
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify({ success: "failed" }));
  }
};
const uploadProduct = async (req, res) => {
  const { productName } = req.body;
  try {
    await db
      .createTable({
        TableName: productName,
        AttributeDefinitions: [
          {
            AttributeName: "version",
            AttributeType: "S",
          },
        ],
        KeySchema: [
          {
            AttributeName: "version",
            KeyType: "HASH",
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      })
      .promise();
    await docClient
      .put({
        TableName: "Products1",
        Item: { ...req.body },
      })
      .promise();
    res.send(JSON.stringify({ success: true }));
  } catch (error) {
    res.send(JSON.stringify({ success: false }));
  }
};
const createSolutionVersion = async (req, res, next) => {
  try {
    await docClient
      .put({
        ...req.body,
      })
      .promise();
    res.send(JSON.stringify({ success: true }));
  } catch (error) {
    next(error);
  }
};
const createProductVersion = async (req, res) => {
  try {
    await docClient
      .put({
        ...req.body,
      })
      .promise();
    res.json(await getProduct());
  } catch (error) {
    console.log(error);
    res.json({ success: true });
  }
};
const createPackage = async (req, res) => {
  try {
    console.log(req.body);
    await docClient
      .put({
        TableName: "Packages1",
        Item: {
          ...req.body,
        },
      })
      .promise();
    res.json(await docClient.scan(tableNameCreator("Packages1")).promise());
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
const GetPackages = async (req, res) => {
  try {
    res.json(await docClient.scan(tableNameCreator("Packages1")).promise());
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
app.use(cors());
app.use(express.json());
app.put("/api/version", UpdateProducts("version"));
app.put("/api/product", UpdateProducts("product"));
app.put("/api/CreateSolution", UpdateProduct);
app.post("/api/CreateSolution", createSolution);
app.post("/api/createSolutionVersion", createSolutionVersion);
app.post("/api/createProductVersion", createProductVersion);
app.post("/api/uploadProduct", uploadProduct);
app.post("/api/uploadPackage", createPackage);
app.post("/api/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const users = await docClient.scan(tableNameCreator("Users")).promise();
    const selectedUser = users.Items.filter(({ ID }) => ID === userName)[0];
    if (!selectedUser) throw new Error("User is not registered");
    if (selectedUser.Password !== password) throw new Error("Wrong Password");
    res.status(200).json({ success: true, error: null });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});
app.get("/api/Packages", GetPackages);
app.get("/api/customers", async (req, res, next) => {
  try {
    res.json(await docClient.scan(tableNameCreator("Customer")).promise());
  } catch (error) {
    next(error);
  }
});
app.get("/api/vendor", async (req, res, next) => {
  try {
    res.json(await docClient.scan(tableNameCreator("Vendor")).promise());
  } catch (error) {
    next(error);
  }
});
app.get("/api/solutionPage", async (req, res, next) => {
  const { id } = req.headers;
  console.log(id);
  try {
    res.json(await docClient.scan(tableNameCreator(id)).promise());
  } catch (error) {
    next(error);
  }
});
app.get("/api/productPage", async (req, res, next) => {
  const { id } = req.headers;
  try {
    res.json(await docClient.scan(tableNameCreator(id)).promise());
  } catch (error) {
    next(error);
  }
});
app.get("/api/solution", async (req, res) => {
  res.send(JSON.stringify(await getSolution()));
});
app.get("/api/oran", async (req, res) => {
  res.send(JSON.stringify(await getoran()));
});
app.get("/api/5gc", async (req, res) => {
  res.send(JSON.stringify(await getSolution()));
});
app.get("/api/version", async (req, res) => {
  res.send(JSON.stringify(await getGc()));
});
app.get("/api/package", async (req, res) => {
  res.send(JSON.stringify(await getPackage()));
});
app.get("/api/du", async (req, res) => {
  res.send(JSON.stringify(await getdu()));
});
app.get("/api/vmw", async (req, res) => {
  res.send(JSON.stringify(await getvmw()));
});
app.get("/api/product", async (req, res) => {
  res.send(JSON.stringify(await getProduct()));
});
app.get("/api/s3Bucket", async (req, res) => {
  try {
    const { id } = req.headers;
    const S3TableData = await docClient.scan(tableNameCreator(id)).promise();
    res.send({ S3TableData });
  } catch (error) {
    console.log(error);
    res.json({ success: "failed" });
  }
});
app.post("/api/s3Bucket", async (req, res) => {
  try {
    console.log(req.body);
    const Data = await docClient.put(req.body).promise();
    const S3TableData = await docClient
      .scan(tableNameCreator(req.body?.TableName))
      .promise();
    res.send({ S3TableData });
  } catch (error) {
    console.log(error);
    res.json({ success: "failed" });
  }
});
app.listen(3000, () => {
  console.log("running");
});
