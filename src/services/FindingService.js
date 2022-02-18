insertNewFinding = async (finding, findingModel, pentestId) => {
    const newFinding = new findingModel({
        title: finding.title,
        vulnDescription: finding.vulnDescription,
        findingDescription: finding.findingDescription,
        imapct: finding.imapct,
        execProbability: finding.execProbability,
        severity: finding.severity,
        category: finding.category,
        screenshots: finding.screenshots, ///base64 encoded value or better s3 bucket link
        additionalComments: finding.additionalComments,
        tags: finding.tags,
        pentestIds: pentestId
        //mitigation: mitigation
    });

    await newFinding.save()

    
};

findByTitleAndPentestId = async (findingModel, title,pentestId) => {
    await findingModel.findOne({title: title, pentestIds: pentestId});
}

module.exports = {insertNewFinding, findByTitleAndPentestId}