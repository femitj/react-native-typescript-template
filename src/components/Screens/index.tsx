import React, {FunctionComponent} from 'react';
import {
  ScrollView,
  ViewStyle,
  StyleSheet,
  View,
  FlatList,
  SectionList,
} from 'react-native';
import styles from './styles';
import {colors} from '../../assets/theme/color';
import {HDP} from '../../utils/devicesize';

type Props = {
  style?: ViewStyle;
  paddingHorizontal?: number;
  keyboardShouldPersistTaps?: any;
  children?: React.ReactNode | React.ReactNode[];
  horizontal?: any;
  isFixed?: boolean;
  [x: string]: any;
};

export const Screen: FunctionComponent<Props> = ({
  style,
  paddingHorizontal,
  children,
  keyboardShouldPersistTaps,
  horizontal,
  isFixed = false,
  backgroundColor = colors.transparent,
  ...otherProps
}) => {
  const scrollableView = () => {
    return (
      <ScrollView
        style={styles.container}
        nestedScrollEnabled={true}
        contentContainerStyle={StyleSheet.flatten([
          styles.contentContainer,
          {paddingHorizontal, backgroundColor},
          style,
        ])}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'never'}
        showsVerticalScrollIndicator={false}
        horizontal={horizontal}
        {...otherProps}>
        {children}
      </ScrollView>
    );
  };

  const fixedView = () => {
    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          {paddingHorizontal, backgroundColor},
          style,
        ])}
        {...otherProps}>
        {children}
      </View>
    );
  };
  return isFixed ? fixedView() : scrollableView();
};

/* ANCHOR SCROLL AREA */
interface ScrollAreaProps {
  horizontal?: boolean;
  flexGrow?: number;
  refValue?: any;
  style?: any;
  children?: React.ReactNode;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  havePadding?: boolean;
  contentStyle?: any;
  [x: string]: any;
}
export const ScrollArea = ({
  flexGrow,
  horizontal,
  style,
  refValue,
  children,
  showsVerticalScrollIndicator,
  showsHorizontalScrollIndicator,
  havePadding,
  contentStyle,
  ...props
}: ScrollAreaProps) => (
  <ScrollView
    {...props}
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={[
      {flexGrow: flexGrow},
      havePadding && {paddingBottom: HDP(50)},
      contentStyle,
    ]}
    horizontal={horizontal}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
    showsHorizontalScrollIndicator={showsHorizontalScrollIndicator || false}
    style={style}
    ref={refValue}>
    {children}
  </ScrollView>
);

interface FlatlistProps extends ScrollAreaProps {
  keyExtractor?: any;
  data?: any;
  renderItem?: any;
  footer?: any;
  header?: any;
  headerStyles?: any;
  stickyHeaderIndices?: number[];
  itemSepratorComponent?: React.ComponentType;
  CellRendererComponent?: React.ComponentType;
  horizontal?: boolean;
  emptyComponent?: any;
  onRefresh?: any;
  refreshing?: boolean;
  onEndReached?: any;
  initialScrollIndex?: any;
}

export const ScreenList: FunctionComponent<FlatlistProps> = ({
  style,
  data,
  renderItem,
  header,
  headerStyles,
  footer,
  keyExtractor,
  stickyHeaderIndices,
  itemSepratorComponent,
  CellRendererComponent,
  horizontal,
  emptyComponent,
  onRefresh,
  refreshing,
  onEndReached,
  initialScrollIndex,
}) => {
  return (
    <FlatList
      horizontal={horizontal}
      data={data}
      renderItem={renderItem}
      CellRendererComponent={CellRendererComponent}
      nestedScrollEnabled
      listKey={Math.random().toString()}
      keyExtractor={(item: any, index: number) =>
        keyExtractor ? keyExtractor(item) : JSON.stringify(item) + index
      }
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={header}
      ItemSeparatorComponent={itemSepratorComponent}
      stickyHeaderIndices={stickyHeaderIndices}
      ListHeaderComponentStyle={StyleSheet.flatten([
        styles.headerContainer,
        headerStyles,
      ])}
      contentContainerStyle={[styles.containerList, style]}
      // style={{overflow: 'visible'}}
      ListFooterComponent={footer}
      ListEmptyComponent={emptyComponent}
      onEndReached={onEndReached}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={initialScrollIndex}
    />
  );
};

interface SectionListProps extends ScrollAreaProps {
  data: any;
  keyExtractor?: any;
  renderItem?: any;
  renderSectionHeader?: any;
  ListEmptyComponent?: any;
  headerStyles?: any;
  ListHeaderComponent?: any;
  Footer?: any;
  onRefresh?: any;
  refreshing?: boolean;
  style?: any;
}

export const SectList: FunctionComponent<SectionListProps> = ({
  data,
  keyExtractor,
  renderItem,
  renderSectionHeader,
  headerStyles,
  ListEmptyComponent,
  ListHeaderComponent,
  Footer,
  onRefresh,
  refreshing,
  style,
}) => (
  <SectionList
    sections={data}
    keyExtractor={(item: any, index: number) =>
      keyExtractor(item) || JSON.stringify(item) + index
    }
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    ListEmptyComponent={ListEmptyComponent}
    ListHeaderComponentStyle={StyleSheet.flatten([
      styles.headerContainer,
      headerStyles,
    ])}
    ListHeaderComponent={ListHeaderComponent}
    ListFooterComponent={Footer}
    onRefresh={onRefresh}
    refreshing={refreshing}
    contentContainerStyle={[styles.containerList, style]}
  />
);
