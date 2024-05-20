import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export async function uploadToS3(
  key: string,
  data: any
): Promise<void> {
  const s3Client = new S3Client({ region: 'ap-northeast-1' });

  const params = {
    Bucket: 'trigger-s3-gzip',
    Key: key,
    Body: data,
    ContentType: 'text/csv'
  };

  const putObjectCommand = new PutObjectCommand(params);

  try {
    const result = await s3Client.send(putObjectCommand);
    console.log('Object uploaded successfully:', result);
  } catch (error) {
    console.error('Error uploading object:', error);
  }
}