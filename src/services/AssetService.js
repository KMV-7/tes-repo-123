
assetSaveAndFindingUpdate = async (findingAssetArray, findingId, projectId, assetModel, findingModel, projectModel) => {

    for (const asset of findingAssetArray) {
        let alreadyExistingAsset = await assetModel.findOne({'name': asset, projectIds: projectId});
        console.log(alreadyExistingAsset)

        if (!alreadyExistingAsset){
            const newAsset = new assetModel({
            name: asset,
            projectIds: projectId,
            });

            alreadyExistingAsset =  await newAsset.save();

            const updatedFinding = await findingModel.updateOne({_id: findingId},{ $addToSet: { assetIds:  [alreadyExistingAsset._id] }});
            const updatedAsset = await assetModel.updateOne({_id: alreadyExistingAsset._id},{ $addToSet: { findingIds:  [findingId] }});
            const updateProject = projectModel.updateOne({_id: projectId},{ $addToSet:  { assetIds: [alreadyExistingAsset._id ]}});
            
        }
    }
}

module.exports = { assetSaveAndFindingUpdate }