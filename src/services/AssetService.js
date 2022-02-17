
assetSaveAndFindingUpdate = async (findingAssetArray, findingId, projectId, assetModel, findingModel) => {
    for (const asset of findingAssetArray) {
        const alreadyExistingAsset = assetModel.findOne({'name': asset});
        if(typeof alreadyExistingAsset.name === 'undefined'){
            const newAsset = new assetModel({
            name: asset,
            projectIds: projectId,
            });
            const savedAsset =  await newAsset.save();
            
            const updatedFinding = await findingModel.updateOne({_id: findingId},{ $addToSet: { assetIds:  [savedAsset._id] }});
            //const updatedAsset = await assetModel.updateOne({_id: findingId},{ $addToSet: { assetIds:  [savedAsset._id] }});
            /*projectModel.updateOne({_id: projectId}, { assetIds: savedAsset._id }, { upsert: true });*/
        }
    }
}

module.exports = { assetSaveAndFindingUpdate }