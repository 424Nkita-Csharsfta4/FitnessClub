import 'package:fitness/Util/Activities.dart';
import 'package:fitness/Util/trainingsessions.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[10],
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                decoration: const BoxDecoration(
                  borderRadius:
                      BorderRadius.vertical(bottom: Radius.circular(25)),
                  color: Colors.black,
                ),
                child: Padding(
                  padding: const EdgeInsets.all(22.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      //avatar and notification =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const CircleAvatar(
                            backgroundColor: Colors.white,
                            backgroundImage:
                                AssetImage('assets/icons/man-avatar.png'),
                            radius: 20,
                          ),
                          Stack(
                            alignment: AlignmentDirectional.topEnd,
                            children: [
                              const Icon(
                                Icons.notifications,
                                color: Colors.white,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.only(right: 2, top: 5),
                                child: Container(
                                  width: 8,
                                  height: 8,
                                  decoration: const BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: Colors.red,
                                  ),
                                ),
                              )
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),

                      // user name ==>>>

                      const Text(
                        "welcome",
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text(
                        "Waheed Ashraf",
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),

                      const SizedBox(
                        height: 30,
                      ),

                      // progress indicator =>>>>>>>>>>>>>>>>>>>>
                      ClipRRect(
                        borderRadius: BorderRadius.all(Radius.circular(20)),
                        child: Container(
                          width: double.infinity,
                          color: Colors.white10,
                          child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Row(
                              children: [
                                CircularPercentIndicator(
                                  radius: 10.0,
                                  lineWidth: 5.0,
                                  percent: .30,
                                  progressColor: Colors.deepOrange,
                                  backgroundColor: Colors.white,
                                ),
                                const Text(
                                  '  you finished 30% from your goals ',
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Colors.white,
                                  ),
                                ),
                                const Spacer(),
                                Image.asset(
                                  'assets/icons/right-arrow.png',
                                  width: 15,
                                  height: 15,
                                  fit: BoxFit.contain,
                                  color: Colors.white,
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              // Training plane ==========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

              Padding(
                padding: const EdgeInsets.all(22.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Training plane',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 15,
                      ),
                    ),
                    const SizedBox(
                      height: 15,
                    ),

                    // Training plane Activities =====================>>>>>>>>>>

                    SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Row(
                        children: const [
                          Activitie(
                              Nameimage: 'cyclist.png',
                              ActivitieName: 'Cycling',
                              ContainerColor:
                                  Color.fromARGB(255, 215, 250, 255)),
                          Activitie(
                              Nameimage: 'runner.png',
                              ActivitieName: 'Running',
                              ContainerColor:
                                  Color.fromARGB(255, 255, 200, 200)),
                          Activitie(
                              Nameimage: 'trainer.png',
                              ActivitieName: 'CrossFit',
                              ContainerColor:
                                  Color.fromARGB(255, 215, 250, 255)),
                          Activitie(
                              Nameimage: 'sit-up.png',
                              ActivitieName: 'Cycling',
                              ContainerColor:
                                  Color.fromARGB(255, 255, 200, 200)),
                          Activitie(
                              Nameimage: 'swimming.png',
                              ActivitieName: 'Swimming',
                              ContainerColor:
                                  Color.fromARGB(255, 215, 250, 255)),
                        ],
                      ),
                    ),

                    // Training Sessiones ===================>>>>>>>>>>>>>>>>>>>>

                    const SizedBox(
                      height: 20,
                    ),
                    const Text(
                      'Training Sessiones',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 15,
                      ),
                    ),
                    const SizedBox(
                      height: 13,
                    ),

                    Column(
                      children: const [
                        TrainingSession(
                          StartTime: '2:00',
                          EndTime: '3:30',
                          SessionName: 'CrossFit',
                          imageName: 'trainer.png',
                          StackColor: Color.fromARGB(255, 215, 250, 255),
                        ),
                        TrainingSession(
                            StartTime: '3:30',
                            EndTime: '4:30',
                            SessionName: 'Cycling',
                            imageName: 'cyclist.png',
                            StackColor: Color.fromARGB(255, 255, 200, 200)),
                        TrainingSession(
                          StartTime: '8:00',
                          EndTime: '9:30',
                          SessionName: 'Strength',
                          imageName: 'sit-up.png',
                          StackColor: Color.fromARGB(255, 215, 250, 255),
                        ),
                        TrainingSession(
                          StartTime: '10:00',
                          EndTime: '11:30',
                          SessionName: 'Running',
                          imageName: 'runner.png',
                          StackColor: Color.fromARGB(255, 215, 250, 255),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
