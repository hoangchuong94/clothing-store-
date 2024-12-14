import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const genders = [
        { id: '1', name: 'men' },
        { id: '2', name: 'boy' },
        { id: '3', name: 'women' },
        { id: '4', name: 'girl' },
        { id: '5', name: 'unisex' },
    ];

    for (const gender of genders) {
        await prisma.gender.upsert({
            where: { id: gender.id },
            update: {},
            create: {
                id: gender.id,
                name: gender.name,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }

    const categories = [
        { id: '1', name: 'clothing', genderId: '1' },
        { id: '2', name: 'accessory', genderId: '1' },
        { id: '3', name: 'clothing', genderId: '2' },
        { id: '4', name: 'accessory', genderId: '2' },
        { id: '5', name: 'clothing', genderId: '3' },
        { id: '6', name: 'accessory', genderId: '3' },
        { id: '7', name: 'clothing', genderId: '4' },
        { id: '8', name: 'accessory', genderId: '4' },
    ];

    for (const category of categories) {
        await prisma.category.upsert({
            where: { id: category.id },
            update: {},
            create: {
                id: category.id,
                name: category.name,
                genderId: category.genderId,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }

    const detailCategories = [
        { id: '1', name: 'jean', categoryId: '1' },
        { id: '2', name: 't-Shirts', categoryId: '1' },
        { id: '3', name: 'leather wallet', categoryId: '2' },
        { id: '4', name: 'jean', categoryId: '3' },
        { id: '5', name: 't-Shirts', categoryId: '3' },
        { id: '6', name: 'hat', categoryId: '4' },
        { id: '7', name: 'jean', categoryId: '5' },
        { id: '8', name: 'dress', categoryId: '5' },
        { id: '9', name: 'necklace', categoryId: '6' },
        { id: '10', name: 'jean', categoryId: '7' },
        { id: '11', name: 't-Shirts', categoryId: '7' },
        { id: '12', name: 'necklace', categoryId: '8' },
    ];

    for (const detailCategory of detailCategories) {
        await prisma.detailCategory.upsert({
            where: { id: detailCategory.id },
            update: {},
            create: {
                id: detailCategory.id,
                name: detailCategory.name,
                categoryId: detailCategory.categoryId,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
