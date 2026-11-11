import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';

type Course = {
  id: string;
  code: string;
  title: string;
  units: number;
  schedule: string;
};

type CourseCardProps = Course;

function CourseCard({
  id,
  code,
  title,
  units,
  schedule,
}: CourseCardProps) {

  const { width } = useWindowDimensions();

  const cardWidth = width * 0.92;

  const badgeColors: Record<string, string> = {
    IT313: '#25206F',
    IT311: '#398D87',
    IT321: '#D5A12F',
    IT331: '#914D80',
    IT341: '#536AA5',
  };

  return (
    <View
      style={[
        styles.card,
        { width: cardWidth },
      ]}
    >

      <View style={styles.cardContent}>
        <View
          style={[
            styles.badge,
            { backgroundColor: badgeColors[code] || '#555555' },
          ]}
        >
          <Text style={styles.badgeText}>{code}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.courseSchedule}>{schedule}</Text>

          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{units} units</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Lecture</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 'c1',
      code: 'IT313',
      title: 'Mobile Programming',
      units: 3,
      schedule: 'MWF 8:00 AM - 9:00 AM',
    },
    {
      id: 'c2',
      code: 'IT311',
      title: 'Systems Integration',
      units: 3,
      schedule: 'TTh 9:30 AM - 11:00 AM',
    },
    {
      id: 'c3',
      code: 'IT321',
      title: 'Information Assurance',
      units: 3,
      schedule: 'MWF 1:00 PM - 2:00 PM',
    },
    {
      id: 'c4',
      code: 'IT331',
      title: 'Web Systems & Technologies',
      units: 3,
      schedule: 'TTh 1:00 PM - 2:30 PM',
    },
    {
      id: 'c5',
      code: 'IT341',
      title: 'Human-Computer Interaction',
      units: 3,
      schedule: 'MWF 3:00 PM - 4:00 PM',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IT313 Course Catalog</Text>
        <Text style={styles.headerSubtitle}>
          {courses.length} courses this semester
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            code={course.code}
            title={course.title}
            units={course.units}
            schedule={course.schedule}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    paddingTop: Platform.OS === 'android' ? 35 : 55,
  },
  header: {
    backgroundColor: '#201B55',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#D5D3E8',
    marginTop: 5,
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#E6E6E6',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
      default: {},
    }),
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 76,
    height: 36,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#252525',
  },
  courseSchedule: {
    fontSize: 11,
    color: '#777777',
    marginTop: 3,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 6,
  },
  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 10,
    color: '#555555',
  },
});